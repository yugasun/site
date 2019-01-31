import React from 'react'

import { Heading } from 'serverless-design-system'

const HeroTitle = ({ children }) => (
  <Heading.h2
    lineHeight={['25px', '25px', '25px', '25px', '50px']}
    letterSpacing={['-0.5px', '-0.5px', '-0.5px', '-0.5px', '-1.11px']}
    fontSize={['25px', '25px', '25px', '25px', '50px']}
    fontFamily='Serverless'
    align='center'
    color='white'
    mb={0}
  >
    {children}
  </Heading.h2>
)

export default HeroTitle
