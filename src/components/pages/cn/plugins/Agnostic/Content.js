import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>丰富的插件支持</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      提供丰富多样的插件支持，帮助开发者快速建立自己的工作流，快速开发并完成 Serverless 架构。
    </P0>
  </Flex>
)

export default CustomPoliciesContent
