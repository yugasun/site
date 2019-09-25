import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>
      Create custom policies for your organization
    </Heading.h3>
    <P0 mb={[42, 42, 0]}>
      If the pre-loaded policies are not sufficient, you can implement your own.
      Custom policies are easy to write using Javascript and can enforce rules
      on any runtime supported by the Serverless Framework, including Node,
      Python, Go, etc. Use the custom policies to inspect the generated
      serverless framework configuration and the AWS resources.
    </P0>
  </Flex>
)

export default CustomPoliciesContent
