import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const PreviewDeploysContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>预览部署</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      自动将更改从拉取请求部署到预览阶段，以便开发者可以即时查看测试结果，部署状态和测试服务。
      <br />
      <br />
      完成拉取请求并删除分支后，服务将自动删除。
    </P0>
  </Flex>
)

export default PreviewDeploysContent
