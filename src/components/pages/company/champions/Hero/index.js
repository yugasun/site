import React from 'react'

import { Box, Text, ResponsiveStack } from 'serverless-design-system'
import { HeroWrapperWithTabs as HeroWrapper } from 'src/fragments'
import HeroTabs from '../../HeroTabs'
import { PL } from 'src/fragments/DesignSystem'

const ChampionsHero = () => (
  <HeroWrapper
    background={[
      'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
      'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
      `linear-gradient(132deg,rgb(0,0,0) 70%,#70221f)`,
    ]}
    height={[550, 525, 560, 530, 610, 525]}
  >
    <HeroTabs selected='champions' />

    <ResponsiveStack mb={[2, 2, 4, 7]} color='white'>
      <Box width={[1, 1, 3 / 4]}>
        <Text.p
          fontSize={[6, 6, 7, 8]}
          fontFamily='SoleilLt'
          lineHeight={1}
          letterSpacing={'-0.2'}
          m={0}
        >
          Champions
        </Text.p>
      </Box>
      <Box width={[1, 1, 1]} pl={[0, 0, 4, 7, 9]}>
        <PL color='white' mt={[3, 3, 1]} mb={3}>
          At Serverless, we value open source. We are incredibly proud of the
          way the Serverless community steps up to the plate on a daily basis to
          contribute to the project and help guide newcomers.
          <br />
          <br />
          <br />
          To recognize our community superstars, we established The Serverless
          Champions program.
        </PL>
      </Box>
    </ResponsiveStack>
  </HeroWrapper>
)

export default ChampionsHero
