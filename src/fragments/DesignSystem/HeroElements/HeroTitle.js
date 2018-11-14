import React from 'react'

import { Heading } from 'serverless-design-system'

const HeroTitle = ({ children }) => (
  <Heading.h2
    lineHeight={'50px'}
    letterSpacing='-1.1px'
    fontSize={[32, 32, 50]}
    fontFamily='Serverless'
    align='center'
    color='white'
    mb={0}
  >
    {children}
  </Heading.h2>
)

export default HeroTitle