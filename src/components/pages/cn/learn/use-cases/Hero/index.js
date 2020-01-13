import React from 'react'

import { Box, Text, ResponsiveStack } from 'serverless-design-system'
import { HeroWrapperWithTabs as HeroWrapper } from 'src/fragments'
import HeroTabs from '../../HeroTabs'
import { PL, Heading } from 'src/fragments/DesignSystem'

const UseCasesHero = () => (
  <HeroWrapper height={[580, 570, 645, 570, 647, 617]}>
    <HeroTabs selected='use-cases' />
    <ResponsiveStack mb={[2, 2, 4, 5]} color='white'>
      <Box width={[1, 1, 1 / 2]}>
        <Heading.h0>应用场景</Heading.h0>
      </Box>
      <Box width={[1, 1, 1 / 2]} pl={[0, 0, 4]}>
        <PL color='white' mt={[3, 3, 1]} mb={3}>
          越来越多的开发人员正在转向Serverless，以此来提高开发效率并保证开发质量。
        </PL>
        <PL color='white' mt={[3, 3, 5]} mb={3}>
          这里会列举Serverless的一些常见应用场景。Serverless
          非常灵活，可用于解决各种应用程序问题。它也是可扩展的，可以轻松构建各种用例。
        </PL>
      </Box>
    </ResponsiveStack>
  </HeroWrapper>
)

export default UseCasesHero
