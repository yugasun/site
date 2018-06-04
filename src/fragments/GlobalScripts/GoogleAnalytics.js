/* eslint-disable no-console */
import React, { Component, PropTypes } from 'react'
import ga from 'react-google-analytics'
import pageView from '../../utils/analytics/page'
const InjectGoogleAnalytics = ga.Initializer
const isClient = typeof window !== 'undefined'
const googleAnalyticsUA = process.env.GOOGLE_ANALYTICS_UA

class GoogleAnalyticsTracker extends Component {

  componentWillMount() {
    if (isClient) {
      if (process.env.NODE_ENV === 'production') {
         (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
         h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
         (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
          })(window,document.documentElement,'async-hide','dataLayer',4000,
        {'GTM-M5WQLDN':true});
        ga('create', googleAnalyticsUA, 'auto')
        ga('require', 'GTM-M5WQLDN')
      } else {
        console.info('ga.create', googleAnalyticsUA)
      }
      pageView()
    }
  }

  componentWillReceiveProps(props) {
    // if route is new, log pageview
    if (props.params.splat !== this.props.params.splat) {
      pageView()
    }
  }

  render() {
    return (
      <InjectGoogleAnalytics />
    )
  }
}

GoogleAnalyticsTracker.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  params: PropTypes.object.isRequired,
}

export default GoogleAnalyticsTracker
