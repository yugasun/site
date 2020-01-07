import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>只需一行代码即可轻松部署</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      Serverless Framework CLI
      提供更加轻便的构建体验，只需一行代码即可将应用轻松部署到云端，帮助开发者降低使用
      Serverless 服务的成本，快速构建应用。
    </P0>
  </Flex>
)

export default CustomPoliciesContent
