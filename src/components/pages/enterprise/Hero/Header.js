import React from 'react'

import { Column, Text, Image } from 'serverless-design-system'
import { PL } from 'src/fragments/DesignSystem'
import slsLogoWhite from 'src/assets/images/pages/enterprise/serverless-framework-logo-white.svg'

const HeroHeader = () => (
  <Column mt={[26, 26, 52, 72, 122]} alignItems={['center']}>
    <Image
      src={slsLogoWhite}
      width={[1, 1, 300, 300, 384]}
      height={[48, 48, 48, 48, 61]}
    />
    <Text
      color='white'
      align={['center']}
      mt={0}
      mb={0}
      fontSize={[60, 60, 60, 60, 77]}
      letterSpacing={['-0.93px', '-0.93px', '-0.93px', '-0.93px', '-1.2px']}
    >
      enterprise
    </Text>

    <PL mb={0} mt={42} color='white' align={['center']}>
      A single solution to develop, deploy, test, monitor, and secure your
      Serverless Applications
    </PL>
  </Column>
)

export default HeroHeader
