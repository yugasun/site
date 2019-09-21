import React from 'react'
import Link from 'gatsby-link'

//ensures that link ends with trailing slash and is all lowercase
function ensureLinkFormat(to) {
  let finalLink = to.toLowerCase()
  finalLink = finalLink.endsWith('/') ? finalLink : `${finalLink}/`
  return finalLink
}

//TODO: remove this and enable underLine props for InternalLink + ExternalLink

const InternalLinkText = ({ to, children, ...otherProps }) => {
  return (
    <Link
      to={ensureLinkFormat(to)}
      style={{ color: 'inherit', borderBottom: '1px solid #fd5750' }}
      {...otherProps}
    >
      {children}
    </Link>
  )
}

export default InternalLinkText
