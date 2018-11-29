import React from 'react'

import { Heading } from 'serverless-design-system'

const HeroMainTitle = ({ children }) => (
  <Heading.h1 
    align='center' 
    fontFamily='Serverless' 
    color='white' 
    fontSize={[48, 48, 90]} 
    letterSpacing='-2px' 
    lineHeight={['64px', '64px', '100px']}
    >
    {children}
  </Heading.h1>
)

export default HeroMainTitle