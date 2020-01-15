import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22} mt={50}>可复用性</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      所有插件均基于Serverless原生能力横向扩展，可复用性强，帮助开发者快速建立并完成自己的工作流。为开发者提供更全面，便捷的可复用插件
    </P0>
  </Flex>
)

export default CustomPoliciesContent
