import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const PreviewDeploysContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>
      Preview deployments & auto-cleanup
    </Heading.h3>
    <P0 mb={[42, 42, 0]}>
      Automatically deploy changes from pull requests to a preview stage so your team can view the test results, deployment status, and test out the services.
      <br/>
      <br/>
      When you are done with your pull request and you delete your branch, your services will automatically be removed. Now your environments can stay lean and clean.
    </P0>
  </Flex>
)

export default PreviewDeploysContent
