import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>All Signal, No Noise</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      The Serverless Framework Monitoring’s smart alerts and graphs take you
      straight to the exact log section, function span and stack trace you need
      to help you resolve issues. Because we instrument your services for you,
      we can provide guided paths from awareness to resolution, so you don’t
      have to spend time looking for correlations yourself.
    </P0>
  </Flex>
)

export default CustomPoliciesContent
