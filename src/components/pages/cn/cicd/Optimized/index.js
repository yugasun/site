import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P } from 'src/fragments/DesignSystem'
import { InternalLink } from 'src/fragments'
import { plugins, cli, components } from 'src/constants/urls'

const Optimized = props => (
  <Flex
    flexDirection='column'
    mx='auto'
    width={[1, 1, 0.8, 0.8, '80%']}
    pb={[92, 92, 92, 92, 132]}
  >
    <Heading.h3 align={['left', 'left', 'center']}>
      针对Serverless的CI/CD全流程
    </Heading.h3>

    <P>
      Serverless CI/CD是一套针对Serverless应用开发的工作流,它包括自动化测试和自动化部署。如果您是Serverless用户,只需简单配置,即可轻松使用该CI/CD工作流。
    </P>

  </Flex>
)

export default Optimized
