import React from 'react'
import { Box } from 'serverless-design-system'

const OnlyMobile = ({children, ...otherProps}) => {
    return (
        <Box {...otherProps} display={[ 'block', 'block', 'none', 'none', 'none' ]}>
            {children}
        </Box>
    )
}

export default OnlyMobile