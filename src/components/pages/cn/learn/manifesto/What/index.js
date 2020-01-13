import React from 'react'
import { Flex, Box } from 'serverless-design-system'
import { Heading, P } from 'src/fragments/DesignSystem'

const paragraphs = [
  `Serverless 是开发者和企业用户共同推动的,它可以使开发者在构建和运行应用时无需管理服务器等基础设施，将构建应用的成本进一步降低，函数是部署和运行的基本单位。`,
  `用户只为实际使用的资源付费。这些代码完全由事件触发（event-trigger），平台根据请求自动平行调整服务资源，拥有近乎无限的扩容能力，空闲时则没有任何资源在运行。代码运行无状态，可以更加简单的实现快速迭代、极速部署。`,
  `Serverless的最终目标，是希望开发者可以将开发重点关注到更有价值的业务代码（而不是浪费时间在其他事情上）。简单的Linux发行版无法为开发者带来更具价值的场景,Kubernetes集群也无法达到轻量化的目标。`,
]

const WhatIsServerless = props => (
  <Flex mt={[62, 62, 62, 62, 92]} flexDirection={['column', 'column', 'row']}>
    <Box width={[1, 1, 0.45]}>
      <Heading.h3>什么是Serverless？</Heading.h3>
    </Box>
    <Box width={[1, 1, 0.55]}>
      {paragraphs.map((paragraph, index) => (
        <P key={index} mt={0} mb={index == 2 ? 0 : 16}>
          {paragraph}
        </P>
      ))}
    </Box>
  </Flex>
)

export default WhatIsServerless
