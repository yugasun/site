import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>Develop, Deploy, Monitor</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      The Serverless Framework generates a set of pre-configured alerts from
      automatically collected data. An alerts stream helps catch
      performance issues caused by a new deployment. Just open your dashboard,
      deploy and monitor the stream. You’ll see errors and performance hits
      caused by your deployment, both immediately after the deployment, and
      later, when an issue persists.
    </P0>
  </Flex>
)

export default CustomPoliciesContent
