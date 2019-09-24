import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const IndustryStandardContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4, 0.5, 0.4]}>
    <Heading.h3 mb={22}>Debug faster with the Invocations Explorer</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      Quickly troubleshoot and optimize the performance of your functions
      with the Invocations Explorer.
      <br /> <br />
      Scan for anomalies in memory usage, durations, cold starts and errors.
      Click an invocation to view all the information you need to help you
      resolve an issue quickly.
    </P0>
  </Flex>
)

export default IndustryStandardContent
