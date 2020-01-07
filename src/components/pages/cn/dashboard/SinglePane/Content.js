import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const IndustryStandardContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4, 0.5, 0.4]}>
    <Heading.h3 mb={22}>适用于Serverless应用的管理看板</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      使用Serverless
      Dashboard，可以轻松查看账号下所有Serverless应用的监控视图。所有已部署的服务都将包含在一个Dashboard路径，因此可以轻松查看跨阶段和区域部署的内容。
    </P0>
  </Flex>
)

export default IndustryStandardContent
