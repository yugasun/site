import React from 'react'

import { Heading } from 'serverless-design-system'

export default ({ children }) => (
  <Heading.h4
    fontFamily="SoleilBk"
    lineHeight={3}
  >
    { children }
  </Heading.h4>
)
