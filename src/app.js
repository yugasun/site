/* Main entry of all requests */
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom' // eslint-disable-line
import HeadTag from './fragments/HeadTag'
import Scripts from './fragments/GlobalScripts'
import SubscribeModal from './fragments/SubscribeModal'
import { initializeVisitorID } from './utils/analytics/visitor'
import initUAClasses from './utils/brower-detect'
import isExternalReferrer from './utils/analytics/source/referrer'
/* Import global CSS before other components and their styles */
import './index.global.css'
import styles from './index.css'

if (typeof window !== 'undefined') {
  // expose React for app scripts
  window.React = React
  window.ReactDOM = ReactDOM
}

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  /** React Router params **/
  params: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object,
}

/* eslint-disable */
;(function(history){
    var pushState = history.pushState
    history.pushState = function(state) {
        if (typeof history.onpushstate === "function") {
            history.onpushstate({state: state})
        }
        // whatever else you want to do
        // maybe call onhashchange e.handler
        return pushState.apply(history, arguments)
    }
})(window.history);

function handleRouteChange(e) {
  const previousURL = window.location.href
  setTimeout(() => {
    const newURL = window.location.href
    // console.log('previousURL', previousURL)
    // console.log('newURL', newURL)
  }, 0)
}
/* eslint-enable */

export default class App extends Component {
  componentDidMount() {
    initializeVisitorID()
    window.addEventListener('reactRouterRedirect', this.handleAuthRedirect, false)
    // add browser based classes
    initUAClasses()
    window.onpopstate = history.onpushstate = handleRouteChange
    const externalReferrer = isExternalReferrer()
    if (externalReferrer) {
      console.log('Referring site', document.referrer) // eslint-disable-line
      // console.log(document.referrer.split('/')[2])
    }
  }
  componentWillUnmount() {
    window.removeEventListener('reactRouterRedirect', this.handleAuthRedirect)
  }
  handleAuthRedirect = (e) => {
    const redirectURL = e.detail.url
    this.props.history.push(redirectURL)
  }
  render() {
    const { location, params } = this.props
    const currentQuery = location && location.query
    return (
      <div>
        <HeadTag params={params} query={currentQuery} />
        <div className={styles.minHeight}>
          {this.props.children}
        </div>
        <SubscribeModal />
        <Scripts params={params} query={currentQuery} />
      </div>
    )
  }
}

App.propTypes = propTypes
