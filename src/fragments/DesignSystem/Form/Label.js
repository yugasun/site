import React from 'react'

import { Label } from 'serverless-design-system'

const FormLabel = ({ children, ...rest }) => (
  <Label
    fontFamily='Soleil'
    fontWeight='normal'
    lineHeight={'24px'}
    color='#5b5b5b'
    fontSize={'14px'}
    letterSpacing={'0.4px'}
    {...rest}
  >
    {children}
  </Label>
)

export default FormLabel
