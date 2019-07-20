import React from 'react'

import { Column, Text, Image } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import boltImage from 'src/assets/images/pages/framework/framework-bolt.svg'

const HeroHeader = () => (
  <Column
    mt={[26, 26, 52, 72, 122]}
    alignItems={['center', 'center', 'flex-start']}
  >
    <Image
      src={boltImage}
      width={[42, 42, 42, 42, 54]}
      height={[64, 64, 64, 64, 82]}
    />
    <Text
      fontSize={[21, 21, 21, 21, 28]}
      letterSpacing={['-0.33', '-0.33', '-0.33', '-0.33', '-0.44px']}
      mb={0}
      color='white'
    >
      serverless framework for the
    </Text>
    <Text
      color='white'
      align={['center', 'center', 'left']}
      mt={0}
      mb={0}
      fontSize={[60, 60, 60, 60, 77]}
      letterSpacing={['-0.93px', '-0.93px', '-0.93px', '-0.93px', '-1.2px']}
    >
      enterprise
    </Text>

    <P mb={0} mt={42} color='#8c8c8c' align={['center', 'center', 'left']}>
      Tooling, training, and support to ensure you do Serverless right.
    </P>
  </Column>
)

export default HeroHeader
