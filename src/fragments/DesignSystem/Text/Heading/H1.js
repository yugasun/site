import React from 'react'
import { Heading } from 'serverless-design-system'

const H1 = ({children, ...otherProps}) => (
    <Heading.h1
      fontSize={['32px', '32px', '32px', '32px', '48px']}
      fontFamily={'Soleil'}
      lineHeight={['44px', '44px', '44px', '44px', '62px']}
      letterSpacing={[0, 0, '0.5px']}
      {...otherProps}
    >
      {children}
    </Heading.h1>
)

export default H1