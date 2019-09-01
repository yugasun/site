import React from 'react'

import { Box, Text, ResponsiveStack } from 'serverless-design-system'
import { HeroWrapperNew as HeroWrapper } from 'src/fragments'
import HeroTabs from '../../HeroTabs'
import { PL } from 'src/fragments/DesignSystem'

const UseCasesHero = () => (
  <HeroWrapper
    background={[
      'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
      'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
      `linear-gradient(132deg,rgb(0,0,0) 70%,#70221f)`,
    ]}
    height={[600, 600, 700, 600, 717]}
  >
    <Box mb={[2, 2, 6]} pt={[0, 0, 4]}>
      <HeroTabs selected='use-cases' />
    </Box>

    <ResponsiveStack mb={[2, 2, 4, 5]} color='white'>
      <Box width={[1, 1, 1 / 2]}>
        <Text.p
          fontSize={[6, 6, 7, 8]}
          fontFamily='Soleil'
          lineHeight={1}
          letterSpacing={'-0.2'}
          m={0}
        >
          Use Cases
        </Text.p>
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
