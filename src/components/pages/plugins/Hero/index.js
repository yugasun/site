import React from 'react'

import { Box, Flex, Image } from 'serverless-design-system'
import { HeroWrapperNew as HeroWrapper } from 'src/fragments'
import { PL, Heading } from 'src/fragments/DesignSystem'
import slsHeroLogo from 'src/assets/images/home/sls-home-logo.svg'

const PluginsHero = () => {
  return (
    <HeroWrapper background={['#f7f7f7']}>
      <Flex flexDirection={'column'} width={[1, 1, 0.5]}>
        <Flex mb={22}>
          <Image src={slsHeroLogo} />
        </Flex>
        <Heading.h0 m={0}>Serverless Plugins</Heading.h0>
        <PL mt={[22, 22, 32]} mb={0}>
          Plugins allow anyone to create new or extend existing commands within
          the Serverless Framework.
        </PL>
      </Flex>
    </HeroWrapper>
  )
}

export default PluginsHero
