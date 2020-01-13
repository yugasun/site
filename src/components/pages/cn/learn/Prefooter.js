import React from 'react'
import styled from 'styled-components'
import PrefooterNewest from 'src/components/PrefooterNewest'
import { InternalLink } from 'src/fragments'
import { P } from 'src/fragments/DesignSystem'
import {
  gettingStarted,
  useCases,
  comparisons,
} from 'src/constants/urls.cn'

const actions = [
  {
    name: '快速开始',
    navProps: {
      to: gettingStarted,
      completed: true,
    },
  },
  {
    name: '应用场景',
    navProps: {
      to: useCases,
      completed: true,
    },
  },
  {
    name: '功能对比',
    navProps: {
      to: comparisons,
      completed: true,
    },
  },
]

const DecoratedLink = styled(InternalLink)`
  color: #5b5b5b;
  text-decoration: none;
  border-bottom: 1px solid #fd5750;

  &:hover {
    color: #5b5b5b;
  }
`

const sentences = [
  <P key='firstPart' color='gray.3' mb={0}>
    查看 Serverless 框架与其他开源项目的比较。
    <br/>
    或者，如果您准备好了，可以快速开始用您喜欢的语言开始构建 Serverless 应用程序。
  </P>,
]

const LearnPrefooter = () => (
  <PrefooterNewest
    heading='了解更多'
    sentences={sentences}
    actions={actions}
    prefooterHeight={[600, 600, 500, 500, 550, 600]}
  />
)

export default LearnPrefooter
