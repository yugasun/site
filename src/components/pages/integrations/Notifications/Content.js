import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>
      Configure notifications to get exactly what you need
    </Heading.h3>
    <P0 mb={[42, 42, 0]}>
      Serverless Framework Notifications are highly customizable, so you can
      target specific applications, services, stages, teams, and metrics. Your
      team will get notified only about what is actionable to them, cutting out
      all the noise.
    </P0>
  </Flex>
)

export default CustomPoliciesContent
