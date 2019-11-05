import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column'>
    <Heading.h3 mb={22} mt={[32, 32, 0]}>Build serverless REST APIs (and more) with Tencent Serverless Cloud Functions</Heading.h3>
    <P0>
    With very little configuration, you can now also easily deploy REST API endpoints that take advantage of the full range of Tencent API Gateway features (e.g. usage plans and throttling). You can now also easily deploy Tencent Serverless Cloud Functions as scheduled jobs, and react to events on Tencent Cloud Object Storage, Tencent Message Broker and Tencent Cloud Kafka. All, via the Serverless Framework Tencent Cloud Plugin.
    </P0>
  </Flex>
)

export default CustomPoliciesContent
