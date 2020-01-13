import React from 'react'

import DefaultLayout from 'src/layouts/cn/DefaultNewest'
import Hero from 'src/components/pages/cn/learn/manifesto/Hero'
import Commandments from 'src/components/pages/cn/learn/manifesto/Commandments'
import What from 'src/components/pages/cn/learn/manifesto/What'
import { Helmet } from 'src/fragments'
import prefooter from 'src/components/pages/cn/learn/Prefooter.js'
import { AppContainer } from 'src/components'

const Overview = ({ location }) => (
  <DefaultLayout prefooter={prefooter} transparentHeader>
    <Helmet
      title='Serverless 概述'
      description='Serverless 是开发者和企业用户共同推动的,它可以使开发者在构建和运行应用时无需管理服务器等基础设施，将构建应用的成本进一步降低，函数是部署和运行的基本单位。'
      keywords='Serverless概述,Serverless简介,Serverles是什么, Serverless概念'
      location={location}
      noIndex={true}
    />
    <Hero />
    <AppContainer>
      <What />
      <Commandments />
    </AppContainer>
  </DefaultLayout>
)

export default Overview
