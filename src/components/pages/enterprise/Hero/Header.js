import React from 'react'
import { Flex, Image, Box } from 'serverless-design-system'
import {
  HeroTitle,
  HeroMainTitle,
  HeroInlineDescription,
} from 'src/fragments/DesignSystem/HeroElements'
import { Heading } from 'src/fragments/DesignSystem'

import serverlessBolt from 'src/assets/images/serverlessBolt.png'

// TODO: Remove hardcoded pixels wherever possible
const Header = () => (
  <Flex.horizontallyCenter flexDirection='column'>
    <Flex.horizontallyCenter height='86px' mt={[1, 1, 6, 5, 3]} mb={'5px'}>
      <Image
        src={serverlessBolt}
        height={['70px', '70px', '70px', '70px', '67px']}
        width={['50px', '50px', '50px', '50px', '44px']}
      />
    </Flex.horizontallyCenter>
    <HeroTitle>serverless</HeroTitle>
    <HeroMainTitle mb={[32, 32, 32, 32, 52]}>
      framework enterprise
    </HeroMainTitle>
    <Box width={[1]}>
      <Heading.h4 align='center'>Develop faster and smarter</Heading.h4>
    </Box>
  </Flex.horizontallyCenter>
)

export default Header
