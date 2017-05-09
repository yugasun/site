/* Main entry of all requests */
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom' // eslint-disable-line
import Head from './fragments/Head'
import Scripts from './fragments/GlobalScripts'
import SubscribeModal from './fragments/SubscribeModal'
import initializeAnalytics from './utils/analytics/init'
import initUAClasses from './utils/brower-detect'
import { setItem, getItem } from './utils/storage' // eslint-disable-line
import { initializeRouteListener, handleRouteChange } from './utils/routerUtils'
import deleteServiceWorkers from './utils/deleteServiceWorkers'
import track from './utils/analytics/track'
import identify from './utils/analytics/identify'
import './index.global.css'
import styles from './index.css'

if (typeof window !== 'undefined') {
  deleteServiceWorkers()
  // expose React for app scripts
  window.React = React
  window.ReactDOM = ReactDOM
  // enable listerers on route changes without react-router-redux
  initializeRouteListener()
}

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  /** React Router params **/
  params: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object,
}

export default class App extends Component {
  // Initial App mount. Happens once
  componentDidMount() {
    initializeAnalytics()
    initUAClasses()  // add browser based classes
    window.addEventListener('routerRedirect', this.handleAuthRedirect, false)
    window.onpopstate = history.onpushstate = handleRouteChange
  }
  componentWillUnmount() {
    window.removeEventListener('routerRedirect', this.handleAuthRedirect)
  }
  handleAuthRedirect = (e) => {
    const redirectURL = e.detail.url
    const profile = e.detail.profile
    // handle redirect
    this.props.history.push(redirectURL)
    // handle analytics save
    if (typeof ga !== 'undefined' && process.env.NODE_ENV === 'production') {
      console.log('Event triggered') // eslint-disable-line
      if (profile && profile.login_count === 1) {
        track('site:account_created', {
          label: 'Account Signup'
        })
      }
    }
    if (typeof _cio !== 'undefined' && process.env.NODE_ENV === 'production') {
      console.log('Customer.io Event triggered') // eslint-disable-line
      if (profile && profile.user_id) {
        // ID user
        identify(profile.user_id, profile)

        setTimeout(() => {
          // trigger customer io
          const pageData = {
            width: window.innerWidth,
            height: window.innerHeight
          }
          if (document.referrer && document.referrer !== '') {
            pageData.referrer = document.referrer
          }
          _cio.page(document.location.href, pageData) // eslint-disable-line
        }, 0)
      }
    }
  }
  render() {
    const { location, params } = this.props
    const currentQuery = location && location.query
    return (
      <div className={styles.app}>
        <Head />
        <div className={styles.content}>
          {this.props.children}
        </div>
        <SubscribeModal />
        <Scripts params={params} query={currentQuery} />
      </div>
    )
  }
}

App.propTypes = propTypes
