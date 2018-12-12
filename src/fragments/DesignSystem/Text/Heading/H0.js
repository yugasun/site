import React from 'react'
import { Heading } from 'serverless-design-system'

const H0 = ({children, ...otherProps}) => (
    <Heading.h1
        fontSize={['48px', '48px', '48px', '48px', '90px']}
        fontFamily={['Soleil', 'Soleil', 'Soleil', 'Soleil', 'SoleilLt']}
        lineHeight={['62px', '62px', '62px', '62px','100px']}
        letterSpacing={['0.5px', '0.5px', '0.5px', '0.5px','-2px']}
        mb={0}
      {...otherProps}
    >
      {children}
    </Heading.h1>
)

export default H0