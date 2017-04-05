/* Main entry of all requests */
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom' // eslint-disable-line
import Head from './fragments/Head'
import Scripts from './fragments/GlobalScripts'
import SubscribeModal from './fragments/SubscribeModal'
import initializeAnalytics from './utils/analytics/init'
import initUAClasses from './utils/brower-detect'
import { setItem, getItem } from './utils/storage' // eslint-disable-line
import initializeRouteListener from './utils/routerUtils'
/* Import global CSS before other components and their styles */
import './index.global.css'
import styles from './index.css'

if (typeof navigator !== 'undefined' && navigator.serviceWorker) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (let registration of registrations) { // eslint-disable-line
      registration.unregister()
    }
  }).then(() => {
    console.log('sw deleted') // eslint-disable-line
  })
}

if (typeof window !== 'undefined') {
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

const LAST_PAGE_SEEN = 'last_page_seen'
/* eslint-disable */
function handleRouteChange(e) {
  const previousURL = window.location.href
  setTimeout(() => {
    const newURL = window.location.href
    const loading = window.location.origin + '/loading/'
    if (newURL === previousURL) {
      return false
    }
    if (newURL === loading || previousURL === loading) {
      console.log('exit early')
      return false
    }
    if (process.env.NODE_ENV === 'development') {
      console.log('previousURL', previousURL)
      console.log('newURL', newURL)
    }
    // Set last page viewed for 404 tracker
    setItem(LAST_PAGE_SEEN, previousURL, function(){
      if (process.env.NODE_ENV === 'development') {
        console.log('done')
      }
    })
  }, 0)
}
/* eslint-enable */

export default class App extends Component {
  // Initial App mount. Happens once
  componentDidMount() {
    initializeAnalytics()
    window.addEventListener('routerRedirect', this.handleAuthRedirect, false)
    // add browser based classes
    initUAClasses()
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
        ga('send', { // eslint-disable-line
          hitType: 'event',
          eventCategory: 'user',
          eventAction: 'sign_up',
          eventLabel: 'Beta Signup'
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
          console.log('send correct page', document.location.href)
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
