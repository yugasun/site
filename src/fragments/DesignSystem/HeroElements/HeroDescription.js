import React from 'react'
import { Flex, P, Box } from 'serverless-design-system'

const HeroDescription = ({ children }) => (
  <Flex.horizontallyCenter px={[2, 2, 5, '18%']} pb={1}>
    <Box width={['auto', 'auto', 'auto', 'auto', 7.5/10]}>
    <P lineHeight={'26px'} align='center' color='gray.2' fontSize={'16px'} letterSpacing={0} m={0}>
      {children}
    </P>
    </Box>
  </Flex.horizontallyCenter>
)

export default HeroDescription