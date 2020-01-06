import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>高可用的告警状态分析</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      如果您是Serverless新手，我们将通过每个告警中包含的有效信息及处理建议来缩短故障排除的学习时间。包括调用报告，日志，调用维度和链路跟踪，可大大降低Serverless应用排障难度。
    </P0>
  </Flex>
)

export default CustomPoliciesContent
