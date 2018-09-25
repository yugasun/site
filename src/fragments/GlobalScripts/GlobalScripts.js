import React from 'react'
import Helmet from 'react-helmet'

import { Box } from 'serverless-design-system'
import GoogleAnalytics from './GoogleAnalytics'
import CustomerIO from './CustomerIO'

export default function GlobalScripts(props) {
  let HubSpotScript
  if (process.env.NODE_ENV === 'production') {
    HubSpotScript = (
      <Helmet
        script={[{
          src: 'https://js.hs-scripts.com/2901603.js',
          type: 'text/javascript'
        }]}
      />
    )
  }
  return (
    <Box>
      <GoogleAnalytics {...props} />
      { HubSpotScript }
      <Box dangerouslySetInnerHTML={{ __html: CustomerIO }} />
    </Box>
  )
}
