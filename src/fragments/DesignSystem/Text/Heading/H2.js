import React from 'react'
import { Heading } from 'serverless-design-system'

const H2 = ({children, ...otherProps}) => (
    <Heading.h2
            fontSize={[4, 4, 6]}
            fontFamily='Soleil'
            letterSpacing={['-0.4px', '-0.4px', 0]}
            lineHeight={[1.33, 1.33, 1.25]}
            {...otherProps}
    >
      {children}
    </Heading.h2>
)

export default H2