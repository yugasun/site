import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>Run serverless apps locally</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      The Serverless Framework CLI manages your code as well as your
      infrastructure, and provides support for local testing of your serverless
      applications. With support for multiple languages (Node.js, Python, Java,
      and more), the Serverless Framework CLI offers the lowest total cost of
      ownership for building production scale full serverless applications.
    </P0>
  </Flex>
)

export default CustomPoliciesContent
