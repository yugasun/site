import React from 'react'
import { P0, Heading, Button } from 'src/fragments/DesignSystem'
import { Flex, Text, Image } from 'serverless-design-system'
import { ExternalLink } from 'src/fragments'
import { dashboard } from 'src/constants/newUrls.js'
import slsHeroLogo from 'src/assets/images/serverless-framework-white-logo.svg'

const HeroContent = props => (
  <Flex
    flexDirection='column'
    width={[1, 1, 0.5, 0.5, 0.4]}
    mb={[62, 62, 50, 50, 0]}
    mx={['auto', 'auto', 'auto', 'auto', 'inherit']}
  >
    <Flex mb={22} justifyContent={['left', 'left', 'center', 'center', 'left']}>
      <Image
        src={slsHeroLogo}
        width={[197, 197, 219, 219, 280]}
        height={[32, 32, 35, 35, 45]}
      />
    </Flex>
    <Heading.h0
      align={['left', 'left', 'center', 'center', 'left']}
      color='#fff'
    >
      Serverless Components
    </Heading.h0>
    <Text
      fontSize='24px'
      lineHeight='32px'
      letterSpacing='0'
      color='#fff'
      fontFamily='SoleilLt'
      mt={[32]}
      align={['left', 'left', 'center', 'center', 'left']}
    >
      Forget infrastructure
    </Text>
    <P0
      mt={[22, 22, 32]}
      mb={[32, 32, 42]}
      align={['left', 'left', 'center', 'center', 'left']}
      color='#fff'
    >
      Deploy entire serverless use-cases, like a blog, a user registration
      system, a payment system or an entire application without managing complex
      cloud infrastructure configurations.
    </P0>
    <Flex justifyContent={['left', 'left', 'center', 'center', 'flex-start']}>
      <ExternalLink to={dashboard}>
        <Button>Sign-up for free</Button>
      </ExternalLink>
    </Flex>
  </Flex>
)

export default HeroContent
