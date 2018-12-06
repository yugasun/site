import React from 'react'

import { Heading } from 'serverless-design-system'

const HeroTitle = ({ children }) => (
  <Heading.h2
    lineHeight={['25px', '25px', '25px', '25px', '32px']}
    letterSpacing={['-0.5px', '-0.5px', '-0.5px', '-0.5px', '-0.72px']}
    fontSize={['25px', '25px', '25px', '25px', '32.3px']}
    fontFamily='Serverless'
    align='center'
    color='white'
    mb={0}
  >
    {children}
  </Heading.h2>
)

export default HeroTitle