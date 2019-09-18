import React from 'react'
import { Heading, Button } from 'src/fragments/DesignSystem'
import { Flex, Text } from 'serverless-design-system'
import { ExternalLink } from 'src/fragments'
import { dashboard } from 'src/constants/newUrls.js'
import FrameworkLogo from 'src/components/pages/features-common/FrameworkLogo'

const HeroContent = props => (
  <Flex
    flexDirection='column'
    width={[1, 1, 0.55, 0.5, 0.45]}
    mt={[58, 58, 58, 72, 0]}
    mb={[62, 62, 50, 50, 0]}
    mx={['auto', 'auto', 'auto', 'auto', 'inherit']}
  >
    <Flex mb={22} justifyContent={['left', 'left', 'center', 'center', 'left']}>
      <FrameworkLogo />
    </Flex>
    <Heading.h0 align={['left', 'left', 'center', 'center', 'left']}>
      Serverless Integrations
    </Heading.h0>
    <Text
      fontSize='24px'
      lineHeight='32px'
      letterSpacing='0'
      fontFamily='SoleilLt'
      mt={[32]}
      align={['left', 'left', 'center', 'center', 'left']}
    >
      Integrate Serverless with your ecosystem
    </Text>
    <Flex
      justifyContent={['left', 'left', 'center', 'center', 'flex-start']}
      mt={[32, 32, 42]}
    >
      <ExternalLink to={dashboard}>
        <Button>Sign-up for free</Button>
      </ExternalLink>
    </Flex>
  </Flex>
)

export default HeroContent
