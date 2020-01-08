import React from 'react'

import DefaultLayout from 'src/layouts/cn/DefaultNewest'
import Prefooter from 'src/components/pages/cn/learn/Prefooter'
import Hero from 'src/components/pages/cn/learn/use-cases/Hero'
import UseCaseList from 'src/components/pages/cn/learn/use-cases/List'
import { Helmet } from 'src/fragments'

const UseCases = ({ location }) => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Helmet
      title='Serverless 应用场景'
      description='Serverless的一些常见应用场景。Serverless 非常灵活，可用于解决各种应用程序问题。它也是可扩展的，可以轻松构建各种用例。'
      keywords='Serverless应用场景,Serverless使用场景,为什么用Serverles'
      location={location}
    />
    <Hero />
    <UseCaseList />
  </DefaultLayout>
)

export default UseCases
