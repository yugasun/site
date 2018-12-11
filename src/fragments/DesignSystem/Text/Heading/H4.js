import React from 'react'
import { Heading } from 'serverless-design-system'

const H4 = ({children, ...otherProps}) => (
    <Heading.h4
      color='white'
      fontSize={['18px', '18px', '18px', '18px', '24px']}
      lineHeight={['24px', '24px', '24px', '24px', '32px']}
      letterSpacing={['-0.28px', '-0.28px', '-0.38px']}
      fontFamily={['SoleilBk', 'SoleilBk', 'SoleilBk', 'SoleilBk', 'Soleil']}
      align={['center', 'center', 'left']}
      {...otherProps}
    >
      {children}
    </Heading.h4>
)

export default H4