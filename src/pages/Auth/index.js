/**
 * 404 page template
 */
import React, { Component } from 'react'
import axios from 'axios' // eslint-disable-line
import { Link } from 'react-router' // eslint-disable-line
import TextInput from '../../components/TextInput'
import { setItem, getItem } from '../../utils/storage' // eslint-disable-line
import constants from '../../utils/analytics/constants'
import { getParams } from '../../utils/analytics/source/urlParams'
import styles from './index.css'

export default class Auth extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      code: '',
    }
  }
  componentDidMount() {
    const params = getParams()
    if (!params) {
      // no verification code found. Send to homepage
      window.location.href = 'https://serverless.com/'
      return false
    }

    if (params.code) {
      this.setState({ // eslint-disable-line
        code: params.code,
      }, () => {
        if (params.state) {
          const state = getParams(`https://dummyurl.com/?${params.state}`)
          console.log('state', state)
          // set framework ID
          if (state.id) {
            setItem(constants.FRAMEWORK_ID, state.id, () => {
              console.log('id set', params.state) // eslint-disable-line
            })
          }

          setItem(constants.FRAMEWORK_ID, state.id, () => {
            console.log('id set', params.state) // eslint-disable-line
          })
        }
        this.refs.code.refs.input.select()
      })
    }
  }
  handleClick = (e) => {
    e.target.select()
  }
  render() {
    const { code } = this.state
    const show = (code) ? 'block' : 'none'
    return (
      <div className={styles.container}>
        <div className={styles.inner} style={{ display: show }}>
          <div className={styles.hero}>
            <h1>Welcome to Serverless</h1>
            <div className={styles.description}>
              Copy the verification code and insert it back into the command line prompt
            </div>
            <div className={styles.inputWrapper}>
              <strong>Verification Code:</strong>
              <TextInput
                ref={'code'}
                value={this.state.code}
                readOnly
                onClick={this.handleClick}
                className={styles.input}
              />
              <span className={styles.text}>
                After adding the verification code, you will be logged in on your machine
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
