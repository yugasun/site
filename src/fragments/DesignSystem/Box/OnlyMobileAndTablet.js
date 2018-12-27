import React from 'react'
import { Box } from 'serverless-design-system'

const OnlyMobileAndTablet = ({children, ...otherProps}) => {
    return (
        <Box {...otherProps} display={[ 'block', 'block', 'block', 'block', 'none' ]}>
            {children}
        </Box>
    )
}

export default OnlyMobileAndTablet