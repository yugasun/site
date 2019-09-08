import React from 'react'
import styled from 'styled-components'
import { TextField } from 'serverless-design-system'

const TextFieldWithNoOutline = styled(TextField)`
  @media screen and (max-width: 414px) {
    text-align: center;
  }

  &:focus {
    outline: none;
  }
`

export default class EmailField extends React.Component {
  constructor(props) {
    super(props)
    this.state = { placeholder: props.placeholder }
  }

  clearPlaceholder = () => this.setState({ placeholder: '' })
  restorePlaceholder = () => {
    this.setState({ placeholder: this.props.placeholder })
  }

  render() {
    return (
      <TextFieldWithNoOutline
        color='white'
        bg='rgba(255, 255, 2555, 0.2)'
        border='none'
        letterSpacing='0.4px'
        lineHeight={1.71}
        px={[1, 1, 1]}
        py={15}
        m={0}
        width={[1, 1, 0.7]}
        height={'37px'}
        borderRadius={0}
        fontSize={1}
        fontFamily='SoleilBk'
        placeholderColor='white'
        required
        {...this.props}
        onFocus={this.clearPlaceholder}
        onBlur={this.restorePlaceholder}
        placeholder={'email address'}
        className='course-newsletter-email'
      />
    )
  }
}
