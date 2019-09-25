import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>
      Securely manage and use secrets and AWS accounts
    </Heading.h3>
    <P0 mb={[42, 42, 0]}>
      The Serverless Framework provides two powerful ways to enable admins to
      securely manage and share secrets like API keys and AWS accounts without
      having to distribute or copy any sensitive data.
      <br />
      <br />
      Admins can set secrets like API Keys in the dashboard and developers can
      easily use, but not view, those secrets when deploying. Serverless
      Framework automatically picks the right set of secrets for the right
      environment.
      <br />
      <br />
      With AWS Access Roles you can have Serverless Framework generate
      short-lived credentials at deploy time so you no longer need to distribute
      AWS access keys. Once the deployment is done, the credentials are thrown
      out.
    </P0>
  </Flex>
)

export default CustomPoliciesContent
