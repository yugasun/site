import React from 'react'

import { Box, ResponsiveStack } from 'serverless-design-system'
import { HeroWrapperWithTabs as HeroWrapper } from 'src/fragments'
import HeroTabs from '../../HeroTabs'
import { PL, Heading } from 'src/fragments/DesignSystem'

const UseCasesHero = () => (
  <HeroWrapper height={[355, 355, 375, 350, 390, 365]}>
    <HeroTabs selected='comparisons' />

    <ResponsiveStack mb={[2, 2, 4, 7]} color='white'>
      <Box width={[1, 1, 1 / 2]}>
        <Heading.h0>功能对比</Heading.h0>
      </Box>
      <Box width={[1, 1, 1 / 2]} pl={[0, 0, 4]}>
        <PL color='white' mt={[3, 3, 1, 1, 3]} mb={3}>
          Serverless架构支持各种功能用例
        </PL>
      </Box>
    </ResponsiveStack>
  </HeroWrapper>
)

export default UseCasesHero
