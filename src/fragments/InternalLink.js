import React from 'react'
import Link from 'gatsby-link'

//ensures that link ends with trailing slash and is all lowercase
function ensureLinkFormat(to) {
  let finalLink = to.toLowerCase()
  finalLink = finalLink.endsWith('/') ? finalLink : `${finalLink}/`
  return finalLink
}

const InternalLink = ({ to, children, anchorLink, underline, ...otherProps }) => (
  <React.Fragment>
    {
      anchorLink ?
      <a href={to} {...otherProps}>
        {children}
      </a>
      :
        <Link
        to={ensureLinkFormat(to)}
        style={
          underline
            ? { color: 'inherit', borderBottom: '1px solid #fd5750' }
            : { color: 'inherit' }
        }
        {...otherProps}
      >
        {children}
      </Link>
    }
    </React.Fragment>
  )

export default InternalLink
