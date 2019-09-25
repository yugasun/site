import React from 'react'
import { P as PP } from 'serverless-design-system'

const PS = ({ children, ...otherProps }) => (
  <PP
    fontSize={'12px'}
    lineHeight={'16px'}
    letterSpacing='0'
    fontFamily='Soleil'
    color='#8c8c8c'
    m={0}
    {...otherProps}
  >
    {children}
  </PP>
)

export default PS
