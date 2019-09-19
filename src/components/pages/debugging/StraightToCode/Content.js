import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>Go straight to the code</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      Along with the Invocations explorer, use our most popular tool for
      debugging code: the stack trace. It takes you straight to the line of code
      which caused the error.
    </P0>
  </Flex>
)

export default CustomPoliciesContent
