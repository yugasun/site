import React from 'react'

import { Heading } from 'serverless-design-system'

const HeroMainTitle = ({ children }) => (
  <Heading.h1 
    align='center' 
    fontFamily='Serverless' 
    color='white' 
    fontSize={[60, 60, 60, 60, 77]} 
    letterSpacing={['-1.34px', '-1.34px', '-1.34px', '-1.34px', '-1.72px']}
    lineHeight={['67px', '67px', '67px', '67px', '86px']}
    >
    {children}
  </Heading.h1>
)

export default HeroMainTitle