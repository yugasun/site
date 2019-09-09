import React from 'react'
import { Flex, Text } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const IndustryStandardContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4, 0.5, 0.4]}>
    <Heading.h3 mb={22}>Monitoring made easy</Heading.h3>

    <P0 mb={[42, 42, 0]}>
      Open your Serverless Framework dashboard and gain instant situation
      awareness of your service’s health - from errors, cold starts and
      timeouts, to invocations and request patterns. Glance at the latest alerts
      or dive in deeper. <br />
      <br />
      With Serverless Framework, there is no need to spend time instrumenting
      your code in order to monitor your application. On deployment, Serverless
      Framework automatically instruments all calls to AWS services and (soon)
      HTTP services. This means that you can give all your focus to developing
      your application.
      <br />
      <br />
      Aggregate views let you quickly spot errors and patterns. Click into a
      chart for insights into api endpoint requests and function invocations,
      down to function spans, stack traces and logs. Zoom down from a view of
      your entire service’s health into the single line in your code with the
      error that triggered a failure in less time than you spent reading this.
    </P0>
  </Flex>
)

export default IndustryStandardContent
