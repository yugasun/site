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
        track('sign_up', {
          category: 'user',
          action: 'sign_up', // legacy event name
          label: 'Beta Signup'
        })
      }
    }
    if (typeof _cio !== 'undefined' && process.env.NODE_ENV === 'production') {
      console.log('Customer.io Event triggered') // eslint-disable-line
      if (profile && profile.user_id) {
        _cio.identify({ // eslint-disable-line
          // Required attributes
          id: profile.user_id,
          email: profile.email, // Email of the currently signed in user.
          created_at: Math.round(+new Date(profile.created_at) / 1000),
         // Example attributes (you can name attributes what you wish)
         //  first_name: 'John',       // Add any attributes you'd like to use in the email subject or body.
         //  last_name: 'Smith',       // First name and last name are shown on people pages.
        })
        setTimeout(() => {
          console.log('send correct page', document.location.href) // eslint-disable-line
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
