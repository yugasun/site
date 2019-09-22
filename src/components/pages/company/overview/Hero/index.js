import React from 'react'

import { Box, Text, ResponsiveStack } from 'serverless-design-system'
import { HeroWrapperWithTabs as HeroWrapper } from 'src/fragments'
import HeroTabs from '../../HeroTabs'
import { PL } from 'src/fragments/DesignSystem'

const CompanyOverviewHero = () => (
  <HeroWrapper
    background={[
      'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
      'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
      `linear-gradient(132deg,rgb(0,0,0) 70%,#70221f)`,
    ]}
    height={[375, 365, 405, 390, 420]}
  >
    <HeroTabs selected='overview' />

    <ResponsiveStack mb={[2, 2, 4, 7]} color='white'>
      <Box width={[1, 1, 3 / 4]}>
        <Text.p
          fontSize={[6, 6, 7, 8]}
          fontFamily='Soleil'
          lineHeight={1}
          letterSpacing={'-0.2'}
          m={0}
        >
          Company
        </Text.p>
      </Box>
      <Box width={[1, 1, 1]} pl={[0, 0, 5, 7, 9]}>
        <PL color='white' mt={[3, 3, 1, 2, 3]}>
          We envision a world where developers can easily scale their cloud
          infrastructure on any platform from any device. At Serverless we are
          creating the tools for that.
        </PL>
      </Box>
    </ResponsiveStack>
  </HeroWrapper>
)

export default CompanyOverviewHero
