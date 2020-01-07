import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const IndustryStandardContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4, 0.5, 0.4]}>
    <Heading.h3 mb={22}>便捷的线上调试</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      使用浏览器即可快速排除故障并优化功能性能。
      <br />
      <br />
      帮助开发者扫描内存使用情况，持续时间，冷启动和错误告警。单击一个调用即可查看所有信息，帮助您快速排除Serverless应用故障。
    </P0>
  </Flex>
)

export default IndustryStandardContent
