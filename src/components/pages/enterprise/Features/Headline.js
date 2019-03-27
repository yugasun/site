import React from 'react'
import { Text, Column, Box } from 'serverless-design-system'
import { Heading } from 'src/fragments/DesignSystem'

const Headline = () => (
  <Column width={[1]} justifyContent='center' alignItems='center'>
    <Text
      fontSize={[24, 24, 24, 24, 32]}
      lineHeight={['38px', '38px', '38px', '38px', '44px']}
      letterSpacing={['-0.38px', '-0.38px', '-0.38px', '-0.38px', '-0.5px']}
      color='white'
      align='center'
      fontFamily='Soleil'
      pt={[0, 0, 32]}
      mb={[0, 0, 0, 0, '10px']}
      mt={[1640, 1640, 1190, 1120, 660]}
    >
      Serverless Framework Enterprise features
    </Text>
    <Box width={[1, 1, 0.65, 0.5, 0.4]}>
      <Heading.h5 color='#8c8c8c' align='center' mb={0}>
        An end-to-end toolkit for serverless application management that helps
        your team move fast, safely
      </Heading.h5>
    </Box>
  </Column>
)

export default Headline
