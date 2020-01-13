import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>线上IDE</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      可直接在页面定位到错误代码行，更加便捷的进行故障处理。
    </P0>
  </Flex>
)

export default CustomPoliciesContent
