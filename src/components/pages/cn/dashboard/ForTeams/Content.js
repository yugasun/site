import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'
import { InternalLink } from 'src/fragments'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>ServerlessServerless 团队协作</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      Serverless Framework
      提供完全的团队协作方案。可以将整个团队成员添加到Dashboard，以便团队以服务维度进行协作，同时提供账号管控能力可限制对敏感资源的访问。
    </P0>
  </Flex>
)

export default CustomPoliciesContent
