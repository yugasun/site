import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>
      Add custom integrations with Webhooks and SNS Topics
    </Heading.h3>
    <P0 mb={[42, 42, 0]}>
      While getting notified in Slack and email is great, sometimes you might
      want to send it to other tools in your ecosystem, like custom internal
      tools or other services not yet supported out of the box (e.g. PagerDuty).
      Use the webhooks or SNS Topic integration to send alerts from Serverless
      Framework to custom API endpoints or SNS Topics.
      <br />
      <br />
      See how easy it is to build a custom integration with this Simple HTTP
      Endpoint example built with the Serverless Framework.
    </P0>
  </Flex>
)

export default CustomPoliciesContent
