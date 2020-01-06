import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const IndustryStandardContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4, 0.5, 0.4]}>
    <Heading.h3 mb={22}>构建 Serverless API，数据管理，任务触发等</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      serverlessCLI可无限扩展，是按照执行次数付费的serverless应用程序最简单的构建方案。使用单个YAML配置文件即可配置全部使用项。
      提供开箱即用的结构，自动化和最佳实践。开发者可以专注于构建复杂的，事件驱动的，无服务器架构。
    </P0>
  </Flex>
)

export default IndustryStandardContent
