import React from 'react'
import Helmet from 'react-helmet'
import { Box } from 'serverless-design-system'
import GoogleAnalytics from './GoogleAnalytics'

export default function GlobalScripts(props) {
  let HubSpotScript
  if (process.env.NODE_ENV === 'production') {
    HubSpotScript = (
      <Helmet>
        <style type='text/css'>{` .async-hide { opacity: 0 !important}`}</style>

        <script>
          {`
          (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y; h.start=1*new Date;
        h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
        (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
        })(window,document.documentElement,'async-hide','dataLayer',4000,
        {'GTM-53WNQ5M':true});
        `}
        </script>
        <script
          src='https://js.hs-scripts.com/2901603.js'
          type='text/javascript'
        />
      </Helmet>
    )
  }
  return (
    <Box>
      <GoogleAnalytics {...props} />
      {HubSpotScript}
    </Box>
  )
}
