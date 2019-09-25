import React from 'react'

import { Box, Text, ResponsiveStack } from 'serverless-design-system'
import { HeroWrapperWithTabs as HeroWrapper } from 'src/fragments'
import HeroTabs from '../../HeroTabs'
import { PL, Heading } from 'src/fragments/DesignSystem'

const UseCasesHero = () => (
  <HeroWrapper
    height={[580, 570, 645, 570, 647, 617]}
  >
    <HeroTabs selected='use-cases' />
    <ResponsiveStack mb={[2, 2, 4, 5]} color='white'>
      <Box width={[1, 1, 1 / 2]}>
        <Heading.h0>Use Cases</Heading.h0>
      </Box>
      <Box width={[1, 1, 1 / 2]} pl={[0, 0, 4]}>
        <PL color='white' mt={[3, 3, 1]} mb={3}>
          More and more developers are moving to Serverless as a way to increase
          velocity and decrease monotony.
        </PL>
        <PL color='white' mt={[3, 3, 5]} mb={3}>
          Here we describe some core use cases for serverless, though we
          encourage you to think beyond them. Serverless is incredibly flexible
          and can be used to address a wide variety of application problems. It
          is also extensible, making it easy to build in use cases that are not
          currently supported.
        </PL>
      </Box>
    </ResponsiveStack>
  </HeroWrapper>
)

export default UseCasesHero
