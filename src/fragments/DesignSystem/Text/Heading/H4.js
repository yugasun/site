import React from 'react'
import { Heading } from 'serverless-design-system'

const H4 = ({children, ...otherProps}) => (
    <Heading.h4
      color='white'
      fontSize={['24px']}
      lineHeight={['32px', '32px', '44px']}
      letterSpacing={['-0.4px', '-0.4px', '-0.5px']}
      fontFamily={'Soleil'}
      align={['center', 'center', 'left']}
      {...otherProps}
    >
      {children}
    </Heading.h4>
)

export default H4