import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>即时的信息通知</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      在潜在问题影响服务质量之前获取通知。通过信息整理渠道，可以将报错，内存使用率，异常持续时间等信息高效下发到企业微信，电子邮箱等。
    </P0>
  </Flex>
)

export default CustomPoliciesContent
