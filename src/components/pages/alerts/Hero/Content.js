import React from 'react'
import { Heading, P0 } from 'src/fragments/DesignSystem'
import { Flex, Text } from 'serverless-design-system'
import { ExternalLink } from 'src/fragments'
import { dashboard } from 'src/constants/urls.js'
import { Button, HeroFrameworkLogo } from 'src/components'

const HeroContent = () => (
  <Flex
    flexDirection='column'
    width={[1, 1, 0.55, 0.5, 0.45]}
    mt={[58, 58, 58, 72, 0]}
    mb={[62, 62, 50, 50, 0]}
    mx={['auto', 'auto', 'auto', 'auto', 'inherit']}
  >
    <Flex mb={22} justifyContent={['left', 'left', 'center', 'center', 'left']}>
      <HeroFrameworkLogo />
    </Flex>
    <Heading.h0 align={['left', 'left', 'center', 'center', 'left']}>
      Serverless Alerts
    </Heading.h0>
    <Text
      fontSize='24px'
      lineHeight='32px'
      letterSpacing='0'
      fontFamily='SoleilLt'
      mt={[32]}
      align={['left', 'left', 'center', 'center', 'left']}
    >
      Maintain Performance with Serverless Alerts
    </Text>
    <P0
      mt={[22, 22, 32]}
      mb={[32, 32, 42]}
      align={['left', 'left', 'center', 'center', 'left']}
      color='white'
    >
      Serverless Framework Alerts help you catch errors and performance issues
      as they occur, letting you resolve issues quickly. Set your favorite
      communication channels to receive customized notifications.
    </P0>
    <Flex justifyContent={['left', 'left', 'center', 'center', 'flex-start']}>
      <ExternalLink to={dashboard}>
        <Button type='primary' text='Sign up for free'/>
      </ExternalLink>
    </Flex>
  </Flex>
)

export default HeroContent
