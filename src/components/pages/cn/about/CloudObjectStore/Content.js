import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column'>
    <Heading.h3 mb={22} mt={[32, 32, 0]}>在腾讯云对象存储 （COS） 上部署静态网站</Heading.h3>
    <P0>
    Tencent-website 组件现已支持最新的 Web 框架和技术（例如：React 和 Vue.js 等应用程序），您可以在几秒钟内将自己的静态网站部署到对象存储中。
    </P0>
  </Flex>
)

export default CustomPoliciesContent
