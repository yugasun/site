import React from 'react'
import { Flex, Text } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const IndustryStandardContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4, 0.5, 0.4]}>
    <Heading.h3 mb={22}>
      Monitor your serverless applications with Serverless Alerts
    </Heading.h3>

    <P0 mb={[42, 42, 0]}>
      Let the Serverless Framework Dashboard’s alert stream keep you up to speed
      on the state of your service’s health.
      <br />
      <br />
      Develop, deploy, then glance at the alerts stream to catch issues related
      to your deployments, making it easy to monitor your work as you go. You
      can even set your favorite communication channels to notify you of
      specific alerts.
      <br />
      <br />
      The Serverless Framework generates a set of pre-configured alerts from
      automatically collected CloudWatch log data. Alerts include:
      <br />
      <br />• Unusual function durations <br />• Timeouts, and approaching
      timeouts <br />• Out of memory <br />• New Error types and escalating
      error rates
    </P0>
  </Flex>
)

export default IndustryStandardContent
