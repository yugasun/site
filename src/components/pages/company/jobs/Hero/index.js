import React from 'react'

import { Box, Text, ResponsiveStack } from 'serverless-design-system'
import { HeroWrapperWithTabs as HeroWrapper } from 'src/fragments'
import HeroTabs from '../../HeroTabs'

const JobsHero = () => (
  <HeroWrapper
    background={[
      'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
      'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
      `linear-gradient(132deg,rgb(0,0,0) 70%,#70221f)`,
    ]}
    height={[370, 370, 520, 460, 430, 403]}
  >
    <HeroTabs selected="jobs" />

    <ResponsiveStack mb={[2, 2, 4, 7]} color="white">
      <Box width={[1, 1, 1 / 2]}>
        <Text.p
          fontSize={[6, 6, 7, 8]}
          fontFamily="Soleil"
          lineHeight={1}
          letterSpacing={'-0.2'}
          m={0}
        >
          Jobs
        </Text.p>
      </Box>
      <Box width={[1, 1, 1 / 2]} pl={[0, 0, 4]}>
        <Text.p
          fontSize={[2, 2, 4]}
          fontFamily="SoleilLt"
          lineHeight={3}
          letterSpacing={0}
          mt={[3, 3, 1]}
          mb={3}
        >
          We empower developers to build more and manage less. The Serverless
          Platform is the main way developers build, operate, and integrate
          serverless applications on any cloud provider.
        </Text.p>
      </Box>
    </ResponsiveStack>
  </HeroWrapper>
)

export default JobsHero
