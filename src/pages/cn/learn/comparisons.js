import React from 'react'

import DefaultLayout from 'src/layouts/cn/DefaultNewest'
import Prefooter from 'src/components/pages/cn/learn/Prefooter'
import Hero from 'src/components/pages/cn/learn/comparisons/Hero'
import ComparisonScrollList from 'src/components/pages/cn/learn/comparisons/comparisonScrollList'
import { Helmet } from 'src/fragments'

const Comparisons = ({ location }) => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Helmet
      title='Serverless 功能对比'
      description='Serverless 部署代码时无需提前配置或运维管理。没有集群，实例甚至操作系统的概念，让服务供应商应对扩缩容策略，无需触发警报或编写脚本来对服务器集群做扩缩容。'
      keywords='Serverless功能对比,Serverless优势'
      location={location}
      noIndex={true}
    />
    <Hero />
    <ComparisonScrollList />
  </DefaultLayout>
)

export default Comparisons
