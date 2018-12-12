import React from 'react'
import { P as PP } from 'serverless-design-system'

const PL = ({children, ...otherProps}) => (
    <PP lineHeight={['26px', '26px', '26px', '26px', 1.33]} fontFamily={['SoleilBk', 'SoleilBk', 'SoleilBk', 'SoleilBk', 'SoleilLt']} fontSize={[16, 16, 16, 16, 24]} letterSpacing={0} {...otherProps}>
        {children}
    </PP>
)

export default PL