import React from 'react'
import { Flex, P, Box } from 'serverless-design-system'

const HeroDescription = ({ children }) => (
  <Flex.horizontallyCenter px={[2, 2, 5, '18%']} pb={1}>
    <Box width={['auto', 'auto', 7.5/10]}>
    <P lineHeight={3} align='center' color='gray.2' >
      {children}
    </P>
    </Box>
  </Flex.horizontallyCenter>
)

export default HeroDescription