import React from 'react'
import { Heading } from 'src/fragments/DesignSystem'
import { Flex, Text } from 'serverless-design-system'
import { InternalLink } from 'src/fragments'
import { Button, HeroFrameworkLogo } from 'src/components'

const HeroContent = () => (
  <Flex
    flexDirection='column'
    width={[1, 1, 0.6, 0.6, 0.47]}
    mb={[62, 62, 50, 50, 0]}
    mx={['auto', 'auto', 'auto', 'auto', 'inherit']}
  >
    <Flex mb={22} justifyContent={['left', 'left', 'center', 'center', 'left']}>
      <HeroFrameworkLogo />
    </Flex>
    <Heading.h0 align={['left', 'left', 'center', 'center', 'left']}>
      Serverless <br /> CLI
    </Heading.h0>
    <Text
      fontSize='24px'
      lineHeight='32px'
      letterSpacing='0'
      fontFamily='SoleilLt'
      mt={[32]}
      align={['left', 'left', 'center', 'center', 'left']}
    >
      Easy YAML + CLI development and deployment to AWS, Azure, Google Cloud &
      more.
    </Text>
    <Flex
      justifyContent={['left', 'left', 'center', 'center', 'flex-start']}
      mt={42}
    >
      <InternalLink to={'/framework/docs/getting-started/'}>
        <Button type={'primary'} text={'Download'}/>
      </InternalLink>
    </Flex>
  </Flex>
)

export default HeroContent
