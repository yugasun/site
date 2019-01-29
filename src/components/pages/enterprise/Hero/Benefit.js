import React from 'react'

import { Box, Text } from 'serverless-design-system'
import { Heading } from 'src/fragments/DesignSystem'

const EnterpriseHeroBenefit = () => (
  <Box mt={[6, 6, 6, 6, 10]}>
    <Box width={[1, 1, 0.69, 0.69, 0.65]} mx='auto'>
      <Text
        color='white'
        align='center'
        fontSize={[24, 24, 24, 24, 32]}
        fontFamily='Soleil'
        letterSpacing={['-0.38px', '-0.38px', '-0.38px', '-0.38px', '-0.5px']}
        lineHeight={['38px', '38px', '38px', '38px', '44px']}
      >
        We make cloud simple
      </Text>
    </Box>
    <Box width={[1, 1, 0.69, 0.69, 0.49]} mx='auto' mt={25}>
      <Heading.h4 color='#8c8c8c' align='center'>
        The cloud is powerful, but increasingly complex. Serverless Framework
        Enterprise lets you start building fast, seamlessly scale, and operate
        with confidence.
      </Heading.h4>
    </Box>
  </Box>
)

export default EnterpriseHeroBenefit
