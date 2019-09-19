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
      <br />• Escalating invocations: at 3 PM, that might be a positive spike in
      use, but at 3 AM, it might mean an attack.
      <br />• new error types, and escalating error rates
    </P0>
  </Flex>
)

export default CustomPoliciesContent
