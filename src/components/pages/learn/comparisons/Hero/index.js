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
    height={[340, 340, 450, 450, 493]}
  >
    <Box mb={[2, 2, 6]} pt={[0, 0, 4]}>
      <HeroTabs selected='comparisons' />
    </Box>

    <ResponsiveStack mb={[2, 2, 4, 7]} color='white'>
      <Box width={[1, 1, 1 / 2]}>
        <Text.p
          fontSize={[6, 6, 7, '70px', '80px', 8]}
          fontFamily='Soleil'
          lineHeight={1}
          letterSpacing={'-0.2'}
          m={0}
        >
          Comparisons
        </Text.p>
      </Box>
      <Box width={[1, 1, 1 / 2]} pl={[0, 0, 4]}>
        <PL color='white' mt={[3, 3, 1, 1, 3]} mb={3}>
          Serverless Architectures are enabling a wide range of use cases, but
          they're not right for every situation.
        </PL>
      </Box>
    </ResponsiveStack>
  </HeroWrapper>
)

export default UseCasesHero
