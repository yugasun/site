import React from 'react'
import { P0, Heading } from 'src/fragments/DesignSystem'
import { Flex, Text } from 'serverless-design-system'
import { ExternalLink } from 'src/fragments'
import { Button, HeroFrameworkLogo } from 'src/components'

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
      Serverless Components
    </Heading.h0>
    <Text
      fontSize='24px'
      lineHeight='32px'
      letterSpacing='0'
      fontFamily='SoleilLt'
      mt={[32]}
      align={['left', 'left', 'center', 'center', 'left']}
    >
      Deploy serverless use-cases, not infrastructure with these simpler, faster, and more powerful abstractions.
    </Text>
    <Flex justifyContent={['left', 'left', 'center', 'center', 'flex-start']} style={{ 'marginTop': '50px' }}>
      <ExternalLink to={'https://github.com/serverless/components/tree/master/templates'}>
        <Button type='primary' text='View Examples'/>
      </ExternalLink>
    </Flex>
  </Flex>
)

export default HeroContent
