import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>No Firehoses</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      Serverless Framework Alerts focus on issues that impact your end-user
      experience, your costs and your security. We alert on:
      <br />
      <br />• Unusual function durations <br />• Timeouts
      <br />• Out of memory occurrences
      <br />• Escalating invocations
      <br />• New error types, and escalating error rates
      <br />• And, more
    </P0>
  </Flex>
)

export default CustomPoliciesContent
