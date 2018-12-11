import React from 'react'
import {
  Flex,
  Image,
} from 'serverless-design-system'
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
      <Image src={serverlessBolt} height={['70px', '70px', '70px', '70px', '67px']} width={['50px', '50px', '50px', '50px', '44px']} />
    </Flex.horizontallyCenter>
    <HeroTitle>serverless</HeroTitle>
    <HeroMainTitle mb={[52, 52, 32, 32, 52]}>framework</HeroMainTitle>
    <HeroInlineDescription>
      The easy, open way to build serverless applications
    </HeroInlineDescription>
    <HeroDescription>
      The Serverless Framework is an open-source CLI for building and deploying
      serverless applications. With over 6 million deployments handled, the
      Serverless Framework is the tool developers trust to build cloud
      applications.
    </HeroDescription>
  </Flex.horizontallyCenter>
)

export default Header
