import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>便捷的本地调试</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      Serverless Framework CLI 将构建代码及基础结构，并为 Serverless
      应用程序的本地测试提供支持。支持多语言版本 Nodejs，Python，Java等
    </P0>
  </Flex>
)

export default CustomPoliciesContent
