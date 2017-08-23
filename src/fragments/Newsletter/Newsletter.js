import React, { Component, PropTypes } from 'react'
import axios from 'axios'
import { getItemSync } from '../../utils/storage'
import track from '../../utils/analytics/track'
import styles from './Newsletter.css'
import classnames from 'classnames'
const newsletterSubscribeAPI = process.env.API.NEWSLETTER

function validateEmail(value) {
  const test = /^([\w_\.\-\+])+@([\w\-]+\.)+([\w]{2,10})+$/.test(value)
  return test
}

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  buttonText: PropTypes.string,
  black: PropTypes.bool,
}
const defaultProps = {
  buttonText: 'Sign Up'
}
export default class Newsletter extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      isSubscribed: false,
      isFetching: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    const user = getItemSync('profile')
    if (user) {
      this.refs.email.value = user.email
    }
  }
  handleSubmit(e) {
    e.preventDefault()
    const { onSubmit } = this.props
    const emailNode = this.refs.email
    const email = emailNode.value
    if (!validateEmail(email)) {
      alert('Woops! invalid email address') // eslint-disable-line
      return false
    }
    this.setState({
      isFetching: true,
      error: false
    })
    const that = this
    axios({
      method: 'post',
      url: newsletterSubscribeAPI,
      data: {
        email: email,
        name: ''
      },
    }).then((response) => {
      if (response && response.data && response.data.created) {
        console.log('creation succeed') // eslint-disable-line
        // Customer.io
        // https://segment.com/academy/collecting-data/naming-conventions-for-clean-data/
        track('site:newsletter_subscribed', {
          label: 'Newsletter Subscription',
          value: window.location.href
        })
        that.setState({
          isSubscribed: true,
          isFetching: false
        }, () => {
          // trigger callback
          emailNode.value = ''
          if (onSubmit) {
            onSubmit()
          }
        })
      } else {
        console.log('failed creation') // eslint-disable-line
        that.setState({
          error: 'alreadyEntered'
        })
      }
    }).catch((error) => {
      console.log(error) // eslint-disable-line
      that.setState({
        error: 'serviceDown'
      })
    })
  }
  render() {
    const { buttonText, className, black } = this.props
    const { isFetching, error } = this.state
    let text = (isFetching) ? 'Success!' : buttonText
    const isBlack = (black === true) ? styles.black : ''
    const classes = classnames(className, styles.emailForm, isBlack)

    if (error) {
      text = 'Try Again'
    }

    return (
      <div className={classes}>
        <div className={styles.formGroup}>
          <input
            ref='email'
            type='email'
            className={styles.formControl}
            name='EMAIL'
            placeholder='you@example.com'
          />
        </div>
        <button onClick={this.handleSubmit} className={styles.btnAction}>
          {text}
        </button>
      </div>
    )
  }
}
Newsletter.defaultProps = defaultProps
Newsletter.propTypes = propTypes
