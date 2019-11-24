import React from 'react'
import { dashboard } from 'src/constants/urls'

const ExternalLink = ({to, children, ...otherProps}) => {
    return (
        <a href={to} target='_blank' rel={to === dashboard ? 'noopener noreferrer nofollow' : 'noopener noreferrer'} {...otherProps}>
            {children}
        </a>
    )
}

export default ExternalLink