import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const IndustryStandardContent = props => (
  <Flex flexDirection='column'>
    <Heading.h3 mb={22} mt={[32, 32, 0]}>Deploy Express.js apps to Tencent Cloud</Heading.h3>

    <P0>
    No need to change your application code or learn new things. We've created a simpler experience for delivering serverless APIs via the new Serverless Express.js Component for Tencent Cloud. In seconds, you can deploy an auto-scaling, pay-per-use Express.js application on Tencent Serverless Cloud Functions.
    </P0>
  </Flex>
)

export default IndustryStandardContent
