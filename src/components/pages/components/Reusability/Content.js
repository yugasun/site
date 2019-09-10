import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>Reusability</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      While Serverless Components can be easily composed in YAML
      (serverless.yml), they are written as reusable javascript libraries
      (serverless.js), with simple syntax inspired by component-based
      frameworks, like React.
    </P0>
  </Flex>
)

export default CustomPoliciesContent
