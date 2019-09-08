import React from 'react'

import { Box, ResponsiveStack, Flex } from 'serverless-design-system'
import { HeroWrapperNew as HeroWrapper } from 'src/fragments'
import HeroTabs from '../ResourcesHeroTabs'
import { PL, Heading } from 'src/fragments/DesignSystem'

const ExamplesHero = () => {
  return (
    <HeroWrapper
      background={[
        'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
        'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
        `linear-gradient(132deg,rgb(0,0,0) 70%,#70221f)`,
      ]}
      height={[350, 350, 365, 350, 370]}
    >
      <Box mb={[3, 3, 5]}>
        <HeroTabs selected='plugins' />
      </Box>

      <ResponsiveStack mb={[2, 2, 4, 9]} color='white'>
        <Box width={[1]}>
          <Heading.h0 m={0}>Plugins</Heading.h0>
        </Box>
        <Flex.verticallyCenter width={[1, 1, 1, 1]} px={[0, 0, 2]}>
          <PL color='white' mt={[22, 22, 1.5]} mb={0}>
            Plugins allow anyone to create new or extend existing commands
            within the Serverless Framework.
          </PL>
        </Flex.verticallyCenter>
      </ResponsiveStack>
    </HeroWrapper>
  )
}

export default ExamplesHero
