import React from 'react'
import { Heading } from "serverless-design-system"

const MainHeading = ({children}) => (
    <Heading.h3 
    letterSpacing={'-0.8px'} 
    lineHeight={'45px'} 
    mb={0}
    align={['center', 'center', 'center', 'center', 'initial']}
    >
    {children}
    </Heading.h3>
)

export default MainHeading