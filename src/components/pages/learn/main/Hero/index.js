import React from 'react'

import { Box, ResponsiveStack, Flex, Image } from 'serverless-design-system'
import { HeroWrapperNew as HeroWrapper } from 'src/fragments'
import HeroTabs from '../../HeroTabs'
import { PL, Heading } from 'src/fragments/DesignSystem'
import learnLogo from 'src/assets/images/pages/learn/learn-logo.svg'

const ExamplesHero = () => {
  return (
    <HeroWrapper
      background={[
        'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
        'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
        `linear-gradient(132deg,rgb(0,0,0) 70%,#70221f)`,
      ]}
      height={[422, 422, 540]}
    >
      <Box mb={[2, 2, 6]} pt={[0, 0, 4]}>
        <HeroTabs selected='examples' />
      </Box>

      <ResponsiveStack mb={[2, 2, 4, 9]} color='white'>
        <Box width={[1]}>
          <Heading.h0 m={0} mt={[42, 42, 0, 0]}>
            <Image src={learnLogo} />
          </Heading.h0>
        </Box>
        <Flex.verticallyCenter width={[1, 1, 1, 0.7]} px={[0, 0, 2, 7]}>
          <PL color='white' mt={[22, 22, 1.5]} mb={0}>
            Your guide to channeling the power of Serverless for good.
          </PL>
        </Flex.verticallyCenter>
      </ResponsiveStack>
    </HeroWrapper>
  )
}

export default ExamplesHero
