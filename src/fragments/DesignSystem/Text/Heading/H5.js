import React from 'react'
import { Heading } from 'serverless-design-system'

const H4 = ({children, ...otherProps}) => (
    <Heading.h5
      fontSize={'18px'}
      lineHeight={'24px'}
      letterSpacing={['-0.28px']}
      fontFamily={'SoleilBk'}
      {...otherProps}
    >
      {children}
    </Heading.h5>
)

export default H4