import React from 'react'
import { Helmet } from 'src/fragments'
import DefaultLayout from 'src/layouts/cn/Default'
import Hero from 'src/components/pages/cn/home/Hero'
import UserTweets from 'src/components/pages/cn/home/UserTweets'
import Paradigm from 'src/components/pages/cn/home/Paradigm'
import FrameworkEditions from 'src/components/pages/cn/home/FrameworkEditions'

const Homepage = ({ location }) => (
  <DefaultLayout pathName={location.pathname}>
  <Helmet
      title='Serverless 官方网站 - 立即使用Serverless，只需三步 !'
      description='Github上最流行的Serverless开发平台，超1500万次下载，开源、免费、高效。轻松完成业务上云，50余组件提供场景化的Serverless应用开发和运维体验，无缝支持Node.js Vue、React、Express、Koa、Egg、Ptyhon Flask、PHP Laravel等多语言开发框架。提供完善的Serverless开发教程，零基础入门。'
      location={location}
      noIndex={true}
    />
    <Hero />
    <FrameworkEditions />
    <UserTweets />
    <Paradigm />
  </DefaultLayout>
)

export default Homepage
