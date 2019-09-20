import React from 'react'
import { Heading } from 'src/fragments/DesignSystem'
import { Flex, Text } from 'serverless-design-system'
import { ExternalLink } from 'src/fragments'
import { dashboard } from 'src/constants/newUrls.js'
import { HeroButton, HeroFrameworkLogo } from 'src/components'

const HeroContent = props => (
  <Flex
    flexDirection='column'
    width={[1, 1, 0.5, 0.5, 0.4]}
    mb={[62, 62, 50, 50, 0]}
    mx={['auto', 'auto', 'auto', 'auto', 'inherit']}
  >
    <Flex mb={22} justifyContent={['left', 'left', 'center', 'center', 'left']}>
      <HeroFrameworkLogo />
    </Flex>
    <Heading.h0 align={['left', 'left', 'center', 'center', 'left']}>
      Serverless Dashboard
    </Heading.h0>
    <Text
      fontSize='24px'
      lineHeight='32px'
      letterSpacing='0'
      fontFamily='SoleilLt'
      mt={[32]}
      align={['left', 'left', 'center', 'center', 'left']}
    >
      A unified view of your Serverless applications
    </Text>
    <Flex
      justifyContent={['left', 'left', 'center', 'center', 'flex-start']}
      mt={[32, 32, 42]}
    >
      <ExternalLink to={dashboard}>
        <HeroButton>Sign-up for free</HeroButton>
      </ExternalLink>
    </Flex>
  </Flex>
)

export default HeroContent
