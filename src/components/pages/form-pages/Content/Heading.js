import React from 'react'
import { Text } from 'serverless-design-system'

const Heading = ({children}) => (
    <Text fontSize={['24px', '24px', '18px', '18px', '24px']} fontFamily='Soleil' lineHeight={'38px'} letterSpacing={'-0.38px'} mb={22}>
        {children}
    </Text>
)

export default Heading