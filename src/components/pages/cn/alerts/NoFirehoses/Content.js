import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection="column" width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>全告警监控</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      错误告警是影响终端用户体验的最大因素，我们会对如下内容发出告警：
      <br />
      <br />• 异常功能持续时间
      <br />• 超时
      <br />• 内存不足
      <br />• 调用异常
      <br />• 更多...
    </P0>
  </Flex>
)

export default CustomPoliciesContent
