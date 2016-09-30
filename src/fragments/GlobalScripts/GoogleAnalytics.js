import React, { Component, PropTypes } from 'react'
import ga from 'react-google-analytics'
const InjectGoogleAnalytics = ga.Initializer
const isProduction = process.env.NODE_ENV === 'production'
const isClient = typeof window !== 'undefined'
const googleAnalyticsUA = process.env.GOOGLE_ANALYTICS_UA

class GoogleAnalyticsTracker extends Component {

  componentWillMount () {
    if (isClient) {
      if (isProduction) {
        ga('create', googleAnalyticsUA, 'auto')
      } else {
        console.info('ga.create', googleAnalyticsUA)
      }
      this.logPageview()
    }
  }

  componentWillReceiveProps (props) {
    if (props.params.splat !== this.props.params.splat) {
      this.logPageview()
    }
  }

  logPageview () {
    if (isClient) {
      if (isProduction) {
        ga('set', 'page', window.location.pathname)
        ga('send', 'pageview')
        console.info('New pageview prod', window.location.pathname)
      } else {
        console.info('New pageview', window.location.href)
      }
    }
  }

  render () {
    return (
      <InjectGoogleAnalytics />
    )
  }
}

GoogleAnalyticsTracker.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  params: PropTypes.object.isRequired,
}

export default GoogleAnalyticsTracker
