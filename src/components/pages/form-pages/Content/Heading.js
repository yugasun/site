import React from 'react'
import { Text } from 'serverless-design-system'

const Heading = ({children}) => (
    <Text fontSize={24} fontFamily='Soleil' lineHeight={'38px'} letterSpacing={'-0.38px'} mb={22}>
        {children}
    </Text>
)

export default Heading