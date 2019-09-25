import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>No more pouring through Cloud Watch logs</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      Invocation details also include the relevant debugging sections from your
      Cloud Watch logs, so you see only the log data you need.
      <br /> <br />
      Additionally, every call to AWS services like S3, DynamoDB, SES, and more,
      is automatically instrumented and visualized, so you can see when the call
      was made and how much time your function spent waiting for a response.
    </P0>
  </Flex>
)

export default CustomPoliciesContent
