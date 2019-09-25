import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import styled from 'styled-components'
import { ResponsiveStack } from 'serverless-design-system'
import { setItemSync, getItemSync } from 'src/utils/storage'
import { validateEmail } from 'src/utils/validator'
import EmailField from './EmailField'
import { Button } from 'src/fragments/DesignSystem'

const StyledForm = styled.form`
  display: block;
  width: 100%;
`

const ButtonWithLineHeight = styled(Button)`
  line-height: 0.88;
`

const newsletterSubscribeAPI = process.env.GATSBY_NEWSLETTER_API

class NewsLetterForm extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      isSubscribed: getItemSync('newsletterSubscribed') === true,
      isFetching: false,
    }
  }

  componentDidMount() {
    const user = getItemSync('profile')
    if (user) {
      this.emailField.value = user.email
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.isFetching) return
    const { onSubmit } = this.props
    const email = this.emailField.value
    if (!validateEmail(email)) {
      alert('Woops! invalid email address') // eslint-disable-line
      return false
    }
    this.setState({
      isFetching: true,
      error: false,
    })
    const that = this
    axios({
      method: 'post',
      url: newsletterSubscribeAPI,
      data: {
        email: email,
        name: '',
      },
    })
      .then(response => {
        if (response && response.data && response.data.created) {
          console.info('Newsletter subscription creation succeed') // eslint-disable-line
          // Customer.io
          // https://segment.com/academy/collecting-data/naming-conventions-for-clean-data/
          that.setState(
            {
              isSubscribed: true,
              isFetching: false,
            },
            () => {
              // trigger callback
              that.emailField.value = ''
              if (onSubmit) {
                onSubmit()
              }
            }
          )
          setItemSync('newsletterSubscribed', true)
          that.container.innerHTML = '<p>Thank you for subscribing!</p>'
        } else {
          console.error(
            'Newsletter subscription failed creation',
            response && response.data && response.data.message
              ? response.data.message
              : ''
          )
        }
      })
      .catch(error => {
        console.error(error) // eslint-disable-line
        that.setState({
          error: 'serviceDown',
        })
      })
  }

  renderSubmitBtn = () => {
    const { submitBtnProps, btnComponent: ButtonComponent } = this.props

    if (ButtonComponent) {
      return <ButtonComponent disabled={this.state.isFetching} />
    }

    return (
      <ButtonWithLineHeight
        width={['100%', '100%', '30%']}
        disabled={this.state.isFetching}
        {...submitBtnProps}
        mt={'16px'}
      >
        subscribe
      </ButtonWithLineHeight>
    )
  }

  render() {
    const {
      emailFieldProps,
      wrapperComponent: Wrapper,
      wrapperProps,
      formStyles,
    } = this.props

    return (
      <StyledForm onSubmit={this.handleSubmit} style={formStyles}>
        <Wrapper
          {...wrapperProps}
          ref={ref => {
            this.container = ReactDOM.findDOMNode(ref)
          }}
          style={{ flexDirection: 'column' }}
        >
          <EmailField
            {...emailFieldProps}
            ref={ref => {
              this.emailField = ReactDOM.findDOMNode(ref)
            }}
          />
          {this.renderSubmitBtn()}
        </Wrapper>
      </StyledForm>
    )
  }
}

NewsLetterForm.defaultProps = {
  emailFieldProps: {},
  submitBtnProps: {},
  formStyles: {},
  wrapperProps: { color: 'white', fontFamily: 'SoleilBk' },
  btnComponent: null,
  wrapperComponent: ResponsiveStack,
}

export default NewsLetterForm
