import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const IndustryStandardContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4, 0.5, 0.4]}>
    <Heading.h3 mb={22}>Monitoring made easy</Heading.h3>

    <P0 mb={[42, 42, 0]}>
    Open your Serverless Framework dashboard and gain instant awareness of your service’s health - from errors, cold starts and timeouts, to invocations and request patterns. Glance at the latest alerts or dive in deeper into function spans, stack traces and logs.
<br /><br />
With Serverless Framework, there is no need to spend time instrumenting your code in order to monitor your application. On deployment, Serverless Framework automatically instruments your services.

    </P0>
  </Flex>
)

export default IndustryStandardContent
