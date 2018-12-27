import React from 'react'
import { Box } from 'serverless-design-system'

const OnlyDesktop = ({children, ...otherProps}) => {
    return (
        <Box {...otherProps} display={[ 'none', 'none', 'none', 'none', 'block']}>
            {children}
        </Box>
    )
}

export default OnlyDesktop