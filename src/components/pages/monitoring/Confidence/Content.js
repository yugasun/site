import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>Deploy with confidence</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      With our deployment tracker, you’ll learn right away when changes you make
      to your service affect performance or cause an error. Scan the deployments
      stream and open a deployment report to view VCS information, policy
      compliance status, output variables, deployment logs and code diffs.
    </P0>
  </Flex>
)

export default CustomPoliciesContent
