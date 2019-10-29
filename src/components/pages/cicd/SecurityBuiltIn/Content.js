import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const SecurityBuiltInContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>
      Security built-in
    </Heading.h3>
    <P0 mb={[42, 42, 0]}>
      No more copying and pasting your AWS account keys or other account credentials into scripts or environment variables.
      <br/>
      <br/>
      Serverless CI/CD uses AWS Access Roles to generate short-lived credentials per deployment. And secrets management is built in so you can securely store your secrets and use them when you deploy.
    </P0>
  </Flex>
)

export default SecurityBuiltInContent
