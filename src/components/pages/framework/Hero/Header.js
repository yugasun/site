import React from 'react'

import { Column, Text, Image } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import boltImage from 'src/assets/images/pages/framework/framework-bolt.svg'

const HeroHeader = () => (
  <Column>
    <Image
      src={boltImage}
      width={[42, 42, 42, 42, 54]}
      height={[64, 64, 64, 64, 82]}
    />
    <Text
      fontSize={[42, 42, 42, 42, 53]}
      letterSpacing={['-0.65px', '-0.65px', '-0.65px', '-0.65px', '-0.83px']}
    >
      serverless
    </Text>
    <Text
      color='black'
      align={['left']}
      mb={0}
      fontSize={[60, 60, 60, 60, 77]}
      letterSpacing={['-0.93px', '-0.93px', '-0.93px', '-0.93px', '-1.2px']}
    >
      framework
    </Text>

    <P>
      A powerful, unified experience to develop, deploy, test, secure, and
      monitor your Serverless applications.
    </P>
  </Column>
)

export default HeroHeader
