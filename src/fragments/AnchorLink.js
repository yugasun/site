import React from 'react'

const AnchorLink = ({ to, children, ...otherProps }) => {
  return (
    <a href={to} {...otherProps}>
      {children}
    </a>
  )
}

export default AnchorLink
