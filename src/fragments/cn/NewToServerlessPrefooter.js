import React from 'react'
import PrefooterNewest from 'src/components/cn/PrefooterNewest'
import { P } from 'src/fragments/DesignSystem'
import {
  gettingStarted,
  docs,
} from 'src/constants/urls.cn'

const sentences = [
  <P color='gray.3' mt={[0, 0, 0]} mb={[0, 0, 0]}>
    可以使用如下命令安装：
  </P>,
  <P
    color='gray.2'
    mt={0}
    fontFamily='Serverless'
    fontSize={16}
    letterSpacing={0}
    lineHeight={1.71}
    mb={0}
  >
    npm install serverless -g
  </P>,
]

const actions = [
  {
    name: '快速开始',
    navProps: {
      to: gettingStarted,
      completed: true,
    },
  },
  {
    name: '文档',
    navProps: {
      to: docs,
      completed: true,
    },
  },
]

const NewToServerlessPrefooter = () => (
  <PrefooterNewest
    heading='Serverless 新手 ?'
    sentences={sentences}
    actions={actions}
  />
)

export default NewToServerlessPrefooter
