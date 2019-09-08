import React from 'react'
import { Column, Text } from 'serverless-design-system'

const LeftSection = () => (
  <Column width={[1, 1, 0.75]} color='white'>
    <Text.p
      fontSize={[6, 6, 7, 8]}
      fontFamily='SoleilLt'
      lineHeight={1}
      letterSpacing={'-0.2'}
      m={0}
    >
      Manifesto
    </Text.p>
  </Column>
)

export default LeftSection
