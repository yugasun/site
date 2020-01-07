import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>开发 部署 监控</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      Serverless Framework
      会根据自动收集的数据生成一组预配置的告警信息。只需打开
      Dashboard，部署并监控程序，无论是在部署之后，还是部署中的应用都可以看到由部署引起的错误和性能下降。
    </P0>
  </Flex>
)

export default CustomPoliciesContent
