import React from 'react'
import { Flex, Image } from 'serverless-design-system'
import {
  HeroTitle,
  HeroMainTitle,
  HeroDescription,
  HeroInlineDescription,
} from 'src/fragments/DesignSystem/HeroElements'

import serverlessBolt from 'src/assets/images/serverlessBolt.png'

// TODO: Remove hardcoded pixels wherever possible
const Header = () => (
  <Flex.horizontallyCenter flexDirection='column' mb={['60px', '60px', 0]}>
    <Flex.horizontallyCenter height='86px' mt={[1, 1, 0, 4, 4]} mb={'5px'}>
      <Image
        src={serverlessBolt}
        height={['70px', '70px', '70px', '70px', '67px']}
        width={['50px', '50px', '50px', '50px', '44px']}
      />
    </Flex.horizontallyCenter>
    <HeroTitle>serverless framework</HeroTitle>
    <HeroMainTitle mb={[52, 52, 32, 32, 52]}>open source</HeroMainTitle>
    <HeroInlineDescription>
      The open standard for serverless development.
    </HeroInlineDescription>
    <HeroDescription>
      With over 6 million downloads, the Serverless Framework is the tool
      developers trust to build and deploy serverless applications.
    </HeroDescription>
  </Flex.horizontallyCenter>
)

export default Header
