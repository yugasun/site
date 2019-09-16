import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>Centrally configure stage-specific settings</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      Not all environments are created equally - what might be ok to do in
      development may not be ok to do in production. The Serverless Framework
      enables you to group common secrets, safeguards, AWS accounts, output
      variables, and parameters into profiles so you can centrally configure
      them once and share them across your services stage-by-stage. When you
      deploy, your services will automatically use the right configurations so
      you never have to worry about misconfigured deployments.
    </P0>
  </Flex>
)

export default CustomPoliciesContent
