import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>Deploy with a single command</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      Under the hood, the Serverless Framework CLI deploys your code to a cloud
      provider like AWS, Microsoft Azure, Google Cloud Platform, Apache
      OpenWhisk, Cloudflare Workers, or a Kubernetes-based solution like
      Kubeless. With support for all major cloud providers, the Serverless
      Framework CLI provides a single, cross-provider developer experience. Hit
      deploy and you’re live.
    </P0>
  </Flex>
)

export default CustomPoliciesContent
