import React from 'react'

import { Box, ResponsiveStack, Flex } from 'serverless-design-system'
import { HeroWrapperWithTabs as HeroWrapper } from 'src/fragments'
import HeroTabs from '../../HeroTabs'
import { PL, Heading } from 'src/fragments/DesignSystem'

const ExamplesHero = () => {
  return (
    <HeroWrapper
      height={[370, 370, 390, 370, 390, 360]}
    >
      <HeroTabs selected='case-studies' />

      <ResponsiveStack mb={[2, 2, 4, 9]} color='white'>
        <Box width={[1]}>
          <Heading.h0 m={0}>Case Studies</Heading.h0>
        </Box>
        <Flex.verticallyCenter width={[1, 1, 1, 1]} px={[0, 0, 2]}>
          <PL color='white' mt={[22, 22, 1.5]} mb={0}>
            Hundreds of teams use the Serverless Framework to launch robust
            applications in a fraction of the time. Read their use cases and
            stories here.
          </PL>
        </Flex.verticallyCenter>
      </ResponsiveStack>
    </HeroWrapper>
  )
}

export default ExamplesHero
