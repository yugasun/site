import React from 'react'

import { Box, Text, ResponsiveStack } from 'serverless-design-system'
import { HeroWrapperWithTabs as HeroWrapper } from 'src/fragments'
import HeroTabs from '../../HeroTabs'
import { PL, Heading } from 'src/fragments/DesignSystem'

const MeetupsHero = () => (
  <HeroWrapper
    background={[
      'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
      'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
      `linear-gradient(132deg,rgb(0,0,0) 70%,#70221f)`,
    ]}
    height={[370, 370, 450, 400, 420, 390]}
  >
    <HeroTabs selected='meetups' />

    <ResponsiveStack mb={[2, 2, 4, 7]} color='white'>
      <Box width={[1, 1, 0.75]}>
        <Heading.h0 m={0}>Meetups</Heading.h0>
      </Box>
      <Box width={[1, 1, 4 / 5]} pl={[0, 0, 4]} pr={[0, 0, 0]}>
        <PL mt={[3, 3, 3]} mb={3} color='white'>
          Serverless meetups are hosted locally in cities all over the world.
          Meetups are a great chance to meet other serverless pros and learn
          more about the technology.
        </PL>
      </Box>
    </ResponsiveStack>
  </HeroWrapper>
)

export default MeetupsHero
