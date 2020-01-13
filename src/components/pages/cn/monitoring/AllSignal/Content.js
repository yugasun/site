import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>全链路智能跟踪</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      Serverless Framework
      智能监控和告警功能可以帮助开发者快速寻找到到异常日志。提供完善的排障处理，指导路径等。帮助开发者精确定位问题。
    </P0>
  </Flex>
)

export default CustomPoliciesContent
