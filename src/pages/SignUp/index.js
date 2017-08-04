/**
 * 404 page template
 */
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import axios from 'axios' // eslint-disable-line
import { Link } from 'react-router' // eslint-disable-line
import { setItem, getItem } from '../../utils/storage' // eslint-disable-line
import identify from '../../utils/analytics/identify'
import track from '../../utils/analytics/track'
import removeURLParams from '../../utils/analytics/source/removeURLParams'
import { getParams } from '../../utils/analytics/source/urlParams'
import styles from './index.css'
import lockInstance from '../../utils/auth'

export default class SignUp extends Component {
  static hasLoadingState = true
  componentDidMount() {
    const profile = localStorage.getItem('profile')
    if (!profile) {
      lockInstance.show()
      // recursively call to show signup...
      const showLogin = () => {
        setTimeout(()=> {
          const hideButton = document.querySelectorAll(".auth0-lock-close-button")
          if (hideButton) {
            hideButton[0].style.display = 'none'
          }
          const links = document.querySelectorAll(".auth0-lock-tabs a")
          if (links && links[1]) {
            links[1].click()
            return
          }
          showLogin()
        }, 10)
      }
      showLogin()
    } else {
      window.location.href = '/'
    }
  }
  render() {
    return (
      <div className={styles.container}>
        <Helmet title={'Serverless Signup'} />
        <div className={styles.inner} >
          <div className={styles.hero}>
            <h1>Signup for Serverless Platform</h1>
          </div>
        </div>
      </div>
    )
  }
}
