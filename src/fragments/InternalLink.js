import React from 'react'
import Link from 'gatsby-link'

//ensures that link ends with trailing slash and is all lowercase
function ensureLinkFormat(to) {
    let finalLink = to.toLowerCase()
    finalLink = finalLink.endsWith('/') ? finalLink : `${finalLink}/`
    return finalLink
}

const InternalLink = ({to, children, ...rest}) => {
    return (
        <Link to={ensureLinkFormat(to)} style={{color: 'inherit'}} {...rest}>
            {children}
        </Link>
    )
}

export default InternalLink