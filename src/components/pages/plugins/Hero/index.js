import React from 'react'

import { Flex } from 'serverless-design-system'
import { HeroWrapperNewest as HeroWrapper } from 'src/fragments'
import { PL, Heading } from 'src/fragments/DesignSystem'
import { HeroFrameworkLogo } from 'src/components'

const PluginsHero = () => {
  return (
    <HeroWrapper>
      <Flex flexDirection={'column'} width={[1, 1, 0.5]}>
        <Flex mb={22}>
          <HeroFrameworkLogo />
        </Flex>
        <Heading.h0 m={0}>Serverless Plugins</Heading.h0>
        <PL mt={[22, 22, 32]} mb={0} color='white'>
          Add functionality to the Serverless Framework. Search all plugins
          below.
        </PL>
      </Flex>
    </HeroWrapper>
  )
}

export default PluginsHero
