import React from 'react'
import { Heading } from 'serverless-design-system'

const H3 = ({children, ...otherProps}) => (
    <Heading.h3 fontFamily='Soleil' lineHeight={['38px', '38px', '38px', '38px', '44px']} letterSpacing={['-0.38', '-0.38', '-0.38', '-0.38', '-0.5px']} fontSize={['24px', '24px', '24px', '24px', '32px']} {...otherProps}>
        {children}
    </Heading.h3>
)

export default H3