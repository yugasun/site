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

export default class Welcome extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      params: {},
    }
  }
  componentDidMount() {
    const params = getParams()


    if (!params) {
      // no verification code found. Send to homepage
      window.location.href = 'https://serverless.com/'
      return false
    }
    console.log('params', params)
    this.setState({ // eslint-disable-line
      params,
    })
    // set framework ID
    if (params.e && params.sub) {
      const e = window.atob(params.e)
      const sub = window.atob(params.sub)
      console.log('e', e)
      console.log('sub', sub)
    }
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.inner} >
          <div className={styles.hero}>
            <h1>Login Successful</h1>
            <div className={styles.description} style={{ display: 'none' }}>
              You can now use the CLI and connect with the serverless platform
            </div>
          </div>
          <div className={styles.nextSteps}>
            <h3>New to serverless? Here are next Steps</h3>
            <div className={styles.boxWrapper}>
              <div className={styles.box}>
                <a href='/framework/docs/'>
                  <div className={styles.stepNumber}>1.</div>
                  <div className={styles.stepTitle}>Checkout the Docs</div>
                  <div className={styles.stepDescription}>
                    Learn the basics of using the Serverless Framework
                  </div>
                </a>
              </div>
              <div className={styles.box}>
                <a href='https://github.com/serverless/examples/' target='_blank' rel='noopener noreferrer'>
                  <div className={styles.stepNumber}>2.</div>
                  <div className={styles.stepTitle}>View Example Projects</div>
                  <div className={styles.stepDescription}>
                    Clone existing serverless examples to build your own projects
                  </div>
                </a>
              </div>
              <div className={styles.box}>
                <a href='https://gitter.im/serverless/serverless' target='_blank' rel='noopener noreferrer'>
                  <div className={styles.stepNumber}>3.</div>
                  <div className={styles.stepTitle}>Chat on Gitter/Forums</div>
                  <div className={styles.stepDescription}>
                    Ask questions and engage<br />with the community
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
