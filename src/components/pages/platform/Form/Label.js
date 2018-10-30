import React from 'react'

import { Label } from 'serverless-design-system'

export default ({ children }) => (
  <Label
    fontFamily="Serverless"
    fontWeight="normal"
    lineHeight={'24px'}
    color="gray.2"
    fontSize={'14px'}
    letterSpacing={'0.4px'}
  >
    {children}
  </Label>
)
