import React from 'react'
import { Heading, Button } from 'src/fragments/DesignSystem'
import { Flex, Text } from 'serverless-design-system'
import { ExternalLink } from 'src/fragments'
import { dashboard, docPages } from 'src/constants/newUrls.js'

const HeroContent = props => (
  <Flex
    flexDirection='column'
    width={[1, 1, 0.5, 0.5, 0.5]}
    mt={[58, 58, 58, 72, 0]}
    mb={[62, 62, 50, 50, 0]}
    mx={['auto', 'auto', 'auto', 'auto', 'inherit']}
  >
    <Heading.h0 align={['left', 'left', 'center', 'center', 'left']}>
      Serverless Alerts
    </Heading.h0>
    <Text
      fontSize='24px'
      lineHeight='32px'
      letterSpacing='0'
      color='#5b5b5b'
      fontFamily='SoleilLt'
      mt={[32, 32, 32, 32, 42]}
      align={['left', 'left', 'center', 'center', 'left']}
    >
      Zero-config, real-time alerts for deployments, new errors, unusual
      durations, timeouts & more.
    </Text>
    <Flex
      justifyContent={[
        'space-between',
        'space-between',
        'center',
        'center',
        'flex-start',
      ]}
      mt={42}
    >
      <ExternalLink to={dashboard}>
        <Button>Sign-up for free</Button>
      </ExternalLink>
    </Flex>
  </Flex>
)

export default HeroContent
