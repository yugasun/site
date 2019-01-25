import React from 'react'

import { Box, Text } from 'serverless-design-system'
import { Heading } from 'src/fragments/DesignSystem'

const EnterpriseHeroBenefit = () => (
  <Box mt={[4, 4, 4, 4, 10]}>
    <Box width={[1, 1, 0.59, 0.59, 0.65]} mx='auto'>
      <Text
        color='white'
        align='center'
        fontSize={[24, 24, 24, 24, 32]}
        fontFamily='Soleil'
        letterSpacing={['-0.38px', '-0.38px', '-0.38px', '-0.38px', '-0.5px']}
        lineHeight={['38px', '38px', '38px', '38px', '44px']}
      >
        Ship production-ready applications with dedicated tooling and support
      </Text>
    </Box>
    <Box width={[1, 1, 0.59, 0.59, 0.49]} mx='auto' mt={25}>
      <Heading.h4 color='#8c8c8c' align='center'>
        Serverless Framework Enterprise provides tooling and support for every
        stage of the development cycle.
      </Heading.h4>
    </Box>
  </Box>
)

export default EnterpriseHeroBenefit
