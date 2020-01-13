import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'
import { InternalLink } from 'src/fragments'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.45]}>
    <Heading.h3 mb={22}>可配置的自定义内容</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      Serverless Framework
      提供可定制通知内容，可以自行在控制台配置相关信息发送，帮助开发者快速获取可用指标。
    </P0>
  </Flex>
)

export default CustomPoliciesContent
