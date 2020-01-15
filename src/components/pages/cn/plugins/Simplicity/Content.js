import React from 'react'
import { Flex, Text } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const IndustryStandardContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4, 0.5, 0.4]}>
    <Heading.h3 mb={22} mt={50}>开源支持</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      Serverless 插件允许开发者扩展或覆盖框架的核心功能，提供开发者更加便捷高效的开源社区支持与开源能力。
    </P0>
  </Flex>
)

export default IndustryStandardContent
