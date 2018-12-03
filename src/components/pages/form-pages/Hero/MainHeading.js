import React from 'react'
import { Heading } from "serverless-design-system"

const MainHeading = ({children}) => (
    <Heading.h1 fontSize={['48px', '48px', '81px', '81px', '61px', '81px']} letterSpacing={'-1.8px'} lineHeight={['45px', '45px', '90px']} mb={0}>
        {children}
    </Heading.h1>
)

export default MainHeading