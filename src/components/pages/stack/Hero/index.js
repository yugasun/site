import React from 'react'

import { Box, ResponsiveStack, Flex } from 'serverless-design-system'
import { HeroWrapperWithTabs as HeroWrapper } from 'src/fragments'
import { PL, Heading } from 'src/fragments/DesignSystem'
import HeroTabs from 'src/components/pages/learn/HeroTabs.js'

const StackExplorerHero = () => {
  return (
    <HeroWrapper>
      <HeroTabs selected='examples' />
      <ResponsiveStack mb={[2, 2, 2, 0]} color='white'>
        <Box width={[1]}>
          <Heading.h0 m={0} mt={[42, 42, 0, 0]}>
            Stack
          </Heading.h0>
        </Box>
        <Flex.verticallyCenter width={[1, 1, 1, 1]} px={[0, 0, 2]}>
          <PL color='white' mt={[22, 22, 1.5]} mb={0}>
            Discover serverless services across all cloud providers.
          </PL>
        </Flex.verticallyCenter>
      </ResponsiveStack>
    </HeroWrapper>
  )
}

export default StackExplorerHero
