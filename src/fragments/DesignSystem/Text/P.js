import React from 'react'
import { P as PP } from 'serverless-design-system'

const P = ({children, ...otherProps}) => (
    <PP lineHeight={'26px'} fontFamily='SoleilBk' {...otherProps}>
        {children}
    </PP>
)

export default P