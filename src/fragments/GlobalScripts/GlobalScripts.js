import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import GoogleAnalytics from './GoogleAnalytics'
import CustomerIO from './CustomerIO'

export default function GlobalScripts(props) {
  let hubspotScript
  if (process.env.NODE_ENV === 'production') {
    hubspotScript = (
      <Helmet
        script={[{
          src: 'https://js.hs-scripts.com/2901603.js',
          type: 'text/javascript'
        }]}
      />
    )
  }
  return (
    <div>
      <GoogleAnalytics {...props} />
      {hubspotScript}
      <div dangerouslySetInnerHTML={{ __html: CustomerIO }} />
    </div>
  )
}
GlobalScripts.propTypes = {
  children: PropTypes.any
}
