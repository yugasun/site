import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>Actionable Alerting</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      If you’re new to serverless computing, we’ll shorten your troubleshooting
      learning curve with helpful recommendations included in each alert. We’ll
      describe possible causes for an issue, and advise you how to resolve it.
      We include direct links to invocation reports, logs, spans and stack
      traces, so you can take action right away.
    </P0>
  </Flex>
)

export default CustomPoliciesContent
