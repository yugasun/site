import React from 'react'
import { Text } from 'serverless-design-system'

const Headline = () => (
  <Text
    fontSize={[24, 24, 24, 24, 32]}
    lineHeight={['38px', '38px', '38px', '38px', '44px']}
    letterSpacing={['-0.38px', '-0.38px', '-0.38px', '-0.38px', '-0.5px']}
    color='white'
    align='center'
    fontFamily='Soleil'
    mb={[0, 0, 0, 0, '10px']}
    mt={[4, 4, 3, 3, 0]}
  >
    Features
  </Text>
)

export default Headline
