import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>Zero-code, yet highly customizable</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      Enforce policies without touching any code. In the dashboard you can add
      and configure policies across your organization without needing to change
      your service configuration or code. Policies are highly customizable, so
      you can apply policies to different environments, configuring them
      uniquely for each environment, and configure their enforcement level.
    </P0>
  </Flex>
)

export default CustomPoliciesContent
