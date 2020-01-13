import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>可配置的 Webhooks</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      使用webhooks或SNS Topic集成可以将Serverless告警信息从Serverless Framework
      发送到自定义API接口或SNS Topic。
    </P0>
  </Flex>
)

export default CustomPoliciesContent
