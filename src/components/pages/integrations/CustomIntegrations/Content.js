import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'
import { InternalLink } from 'src/fragments'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.45]}>
    <Heading.h3 mb={22}>
      Add custom integrations with Webhooks and SNS Topics
    </Heading.h3>
    <P0 mb={[42, 42, 0]}>
      While getting notified in Slack and email is great, sometimes you might
      want to send it to other tools in your ecosystem, like custom internal
      tools or other services not yet supported out of the box (e.g. PagerDuty).
      Use the webhooks or SNS Topic integration to send alerts from Serverless
      Framework to custom API endpoints or SNS Topics.
    </P0>
  </Flex>
)

export default CustomPoliciesContent
