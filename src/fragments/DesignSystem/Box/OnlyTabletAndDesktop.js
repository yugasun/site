import React from 'react'
import { Box } from 'serverless-design-system'

const OnlyTabletAndDesktop = ({children, ...otherProps}) => {
    return (
        <Box {...otherProps} display={[ 'none', 'none', 'block' ]}>
            {children}
        </Box>
    )
}

export default OnlyTabletAndDesktop