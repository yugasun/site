import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column'>
    <Heading.h3 mb={22} mt={[32, 32, 0]}>Deploy a static website to Tencent Cloud Object Storage</Heading.h3>
    <P0>
    Works with all the latest web frameworks and technologies. In seconds, you can deploy auto-scaling, pay-per-use, serverless websites, React and Vue.js applications with the Serverless Website Component for Tencent Cloud. 
    </P0>
  </Flex>
)

export default CustomPoliciesContent
