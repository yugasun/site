import React from 'react'

import { Heading } from 'serverless-design-system'

const HeroMainTitle = ({ children, ...otherProps }) => (
  <Heading.h1
    align='center'
    fontFamily='Serverless'
    color='white'
    fontSize={[45, 45, 45, 45, 81]}
    letterSpacing={['-1px', '-1px', '-1px', '-1px', '-1.8px']}
    lineHeight={['50px', '50px', '50px', '50px', '75px']}
    {...otherProps}
  >
    {children}
  </Heading.h1>
)

export default HeroMainTitle
