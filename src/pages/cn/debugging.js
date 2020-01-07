import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/cn/Newest'
import {
  NewToServerlessPrefooter,
  WhitepaperDownloadBanner,
} from 'src/fragments'
import { Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/cn/debugging/Hero'
import InvocationsExplorer from 'src/components/pages/cn/debugging/InvocationsExplorer'
import StraightToCode from 'src/components/pages/cn/debugging/StraightToCode'
import NoMoreCloudWatch from 'src/components/pages/cn/debugging/NoMoreCloudWatch'

const Debugging = ({ location }) => (
  <HomeLayout
    prefooter={NewToServerlessPrefooter}
    transparentHeader={true}
    pathName={location.pathname}
  >
    <Helmet
      title='Serverless 调试 |  Serverless debugging'
      description='使用浏览器即可快速排除故障并优化功能性能。帮助开发者扫描内存使用情况，持续时间，冷启动和错误告警。单击一个调用即可查看所有信息，帮助您快速排除Serverless应用故障。'
      keywords='Serverless调试,Serverlessdebug,Serverless debug方案, Serverless在线调试,Serverless本地调试'
      location={location}
      noIndex={true}
    />
    <Hero />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <InvocationsExplorer />
        <StraightToCode />
        {/* <NoMoreCloudWatch /> */}
      </AppContainer>
    </Background>

    {/*
      <Background background='#f7f7f7'>
      <WhitepaperDownloadBanner />
    </Background>
     */}
  </HomeLayout>
)

export default Debugging
