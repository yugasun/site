import React from 'react'

const ExternalLink = ({to, children, ...otherProps}) => {
    return (
        <a href={to} target='_blank' rel='noopener noreferrer' {...otherProps}>
            {children}
        </a>
    )
}

export default ExternalLink