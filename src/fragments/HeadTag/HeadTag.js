import React from 'react'
import Helmet from 'react-helmet'

export default class HeadTag extends React.Component {
  render () {
    return (
      <div>
        <style>
          {"@-ms-viewport { width: device-width; }"}
        </style>
        <Helmet
          meta={[
            { property: 'og:site_name', content: process.env.SITENAME },
            { name: 'twitter:site', content: `@${process.env.TWITTER}` },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
          ]}
        />
      </div>
    )
  }
}
