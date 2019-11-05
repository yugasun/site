import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column'>
    <Heading.h3 mb={22} mt={[32, 32, 0]}>使用腾讯云云函数 SCF 构建无服务器 REST APIs</Heading.h3>
    <P0>
    现在，您无需复杂的配置，通过 Tencent-apigateway 组件便可以轻松部署 REST API，从而使用腾讯 API 网关的全部功能

    同时，您还可以轻松地使用腾讯云 Serverless Cloud Function，使用腾讯云对象存储 COS、消息队列 CMQ 和消息队列 Kafka 等。所有这一切，通过 Serverless Framework 的腾讯云插件就能完成。
    </P0>
  </Flex>
)

export default CustomPoliciesContent
