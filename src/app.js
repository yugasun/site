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
    console.log('previousURL', previousURL)
    console.log('newURL', newURL)
    // Set last page viewed for 404 tracker
    setItem(LAST_PAGE_SEEN, previousURL, function(){
      console.log('done')
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
    this.props.history.push(redirectURL)
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
