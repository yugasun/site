import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>Get notified before something goes wrong</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      Get notifications about potential issues before they impact the quality of
      service. You’ll be notified about dangers like new errors, high memory
      usage, unusual durations, and more. The integration allow you to send the
      notifications to your team via Slack or email.
    </P0>
  </Flex>
)

export default CustomPoliciesContent
