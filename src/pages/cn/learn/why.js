import React from 'react'

import DefaultLayout from 'src/layouts/cn/DefaultNewest'
import Hero from 'src/components/pages/cn/learn/why/Hero'
import ServerlessAppBenefits from 'src/components/pages/cn/learn/why/AppBenefits'
import { Helmet } from 'src/fragments'
import prefooter from 'src/components/pages/cn/learn/Prefooter.js'

const Overview = ({ location }) => (
  <DefaultLayout prefooter={prefooter} transparentHeader>
    <Helmet
      title='Serverless 功能特性'
      description='Serverless 部署代码时无需提前配置或运维管理。没有集群，实例甚至操作系统的概念，让服务供应商应对扩缩容策略，无需触发警报或编写脚本来对服务器集群做扩缩容。'
      keywords='Serverless功能,Serverless特性,为什么用Serverles'
      location={location}
      noIndex={true}
    />
    <Hero />
    <ServerlessAppBenefits />
  </DefaultLayout>
)

export default Overview
