import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/cn/Newest'
import { NewToServerlessPrefooter, WhitepaperDownloadBanner } from 'src/fragments'
import { Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/cn/about/Hero'
import ExpressJS from 'src/components/pages/cn/about/ExpressJS'
import CloudObjectStore from 'src/components/pages/cn/about/CloudObjectStore'
import RestAPI from 'src/components/pages/cn/about/RestAPI'

const TencentPartnerPageChinese = ({ location }) => (
  <HomeLayout prefooter={NewToServerlessPrefooter} transparentHeader={true}>
    <Helmet title='下一代无服务器 —— Serverless Cloud | Tencent + Serverless Framework'
    location={location} />
    <Hero />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <ExpressJS />
        <CloudObjectStore />
        <RestAPI />
      </AppContainer>
    </Background>

    {/*
      <Background background='#f7f7f7'>
      <WhitepaperDownloadBanner />
    </Background>
     */}
  </HomeLayout>
)

export default TencentPartnerPageChinese
