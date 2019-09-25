import React from 'react'
import { P as PP } from 'serverless-design-system'
//P with no margins

const P0 = ({ children, ...otherProps }) => (
  <PP lineHeight={'26px'} fontFamily='SoleilBk' m={0} {...otherProps}>
    {children}
  </PP>
)

export default P0
