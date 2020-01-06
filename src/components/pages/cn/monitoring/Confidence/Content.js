import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>部署状态可控</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      当Serverless应用更改导致性能故障或部署错误时Serverless
      Framework会自动检测并输出错误状态，部署日志和相关代码差异。
    </P0>
  </Flex>
)

export default CustomPoliciesContent
