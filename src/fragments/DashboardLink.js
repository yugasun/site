import React from 'react'

const ExternalLink = ({ utmParameters, children, ...otherProps }) => {
  return (
    <a href={'https://dashboard.serverless.com'} {...otherProps}>
      {children}
    </a>
  )
}

export default ExternalLink
