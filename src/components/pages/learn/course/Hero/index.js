import React from 'react'

import { Box, ResponsiveStack, Flex, Text } from 'serverless-design-system'
import { HeroWrapperNew as HeroWrapper } from 'src/fragments'
import HeroTabs from '../../HeroTabs'
import { PS } from 'src/fragments/DesignSystem'

const ExamplesHero = () => {
  return (
    <HeroWrapper
      background={[
        'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
        'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
        `linear-gradient(132deg,rgb(0,0,0) 70%,#70221f)`,
      ]}
      height={[396, 396, 437, 437, 566]}
    >
      <Box mb={[2, 2, 42, 42, 6]} pt={[0, 0, 0, 0, 4]}>
        <HeroTabs selected='learn' />
      </Box>

      <ResponsiveStack mb={[2, 2, 4, 9]} color='white'>
        <Box width={[1, 1, 1, 1, 0.45]}>
          <Text
            color='#fd5750'
            fontSize={['14px']}
            lineHeight={['24px']}
            letterSpacing={['0.44px']}
          >
            8 videos
          </Text>
          <Text
            m={0}
            fontSize={[18, 18, 18, 18, 40]}
            lineHeight={['30px', '30px', '30px', '30px', '50px']}
            letterSpacing={['-0.28px', '-0.28px', '-0.28px', '-0.28px', '0px']}
            my={'12px'}
            fontFamily='Soleil'
          >
            Serverless Full Stack Application on AWS
          </Text>
          <PS>by Gareth McCumskey</PS>
        </Box>
        <Flex.verticallyCenter width={[1, 1, 1, 1, 0.5]} />
      </ResponsiveStack>
    </HeroWrapper>
  )
}

export default ExamplesHero
