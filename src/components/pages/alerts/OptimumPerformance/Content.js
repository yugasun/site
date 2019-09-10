import React from 'react'
import { Flex, Text } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const IndustryStandardContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4, 0.5, 0.4]}>
    <Heading.h3 mb={22}>
      Maintain Optimum Performance with Serverless Alerts
    </Heading.h3>

    <P0 mb={[42, 42, 0]}>
      Serverless Framework Alerts help you catch errors and performance issues
      as they occur, letting you resolve issues quickly. You can even set your
      favorite communication channels to receive a custom set of alert
      notifications.
    </P0>
  </Flex>
)

export default IndustryStandardContent
