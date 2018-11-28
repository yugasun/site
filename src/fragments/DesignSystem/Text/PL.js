import React from 'react'
import { P as PP } from 'serverless-design-system'

const PL = ({children, ...otherProps}) => (
    <PP lineHeight={1.33} fontFamily='SoleilLt' fontSize={[18, 18, 24]} letterSpacing={0} {...otherProps}>
        {children}
    </PP>
)

export default PL