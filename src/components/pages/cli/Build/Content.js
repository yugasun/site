import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const IndustryStandardContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4, 0.5, 0.4]}>
    <Heading.h3 mb={22}>
      Build serverless APIs, data processing pipelines, scheduled tasks, and
      more
    </Heading.h3>
    <P0 mb={[42, 42, 0]}>
      The Serverless Framework CLI is the simplest way to develop infinitely
      scalable, pay-per-execution serverless applications. A single
      configuration file allows you to list your functions and define the
      endpoints that they’re subscribed to. It provides structure, automation
      and best practices out-of-the-box, allowing you to focus on building
      sophisticated, event-driven, serverless architectures, comprised of
      functions and events.
    </P0>
  </Flex>
)

export default IndustryStandardContent
