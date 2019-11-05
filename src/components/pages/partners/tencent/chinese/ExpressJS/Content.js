import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const IndustryStandardContent = props => (
  <Flex flexDirection='column'>
    <Heading.h3 mb={22} mt={[32, 32, 0]}>在腾讯云上部署 Express.js 应用程序</Heading.h3>

    <P0>
    对于框架部署，我们为腾讯云提供了更简单方便的方式 —— 通过腾讯云 Express 组件，您无需对项目进行大量更改，就可以将现有服务轻松上云：只需短短几秒，便能在腾讯云 Serverless 架构上部署按需计费的 Express.js 应用程序。
    </P0>
  </Flex>
)

export default IndustryStandardContent
