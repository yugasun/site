import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>Fast deployments</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      Most Serverless Components deploy 20x faster than traditional cloud
      provisioning tools. Our intention is to design Serverless Components that
      deploy almost instantly, removing the need to emulate cloud services
      locally.
    </P0>
  </Flex>
)

export default CustomPoliciesContent
