import React from 'react'

const ExternalLink = ({to, children, ...rest}) => {
    return (
        <a href={to} target='_blank' rel='noopener noreferrer' {...rest}>
            {children}
        </a>
    )
}

export default ExternalLink