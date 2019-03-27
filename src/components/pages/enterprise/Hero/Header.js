import React from 'react'
import { Flex, Image, Box, Column } from 'serverless-design-system'
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
    <HeroTitle>serverless framework</HeroTitle>
    <HeroMainTitle mb={[32, 32, 32, 32, 52]}>enterprise</HeroMainTitle>
    <Column width={[1]} justifyContent='center' alignItems='center'>
      <Heading.h4>The total serverless solution</Heading.h4>
      <Box width={[1, 1, 0.5, 0.4, 0.3]}>
        <Heading.h5 color='#8c8c8c' align='center'>
          Out-of-the-box monitoring, alerts, secrets, policy enforcement and
          more.
        </Heading.h5>
      </Box>
    </Column>
  </Flex.horizontallyCenter>
)

export default Header
