import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/cn/Newest'
import {
  NewToServerlessPrefooter,
  WhitepaperDownloadBanner,
} from 'src/fragments'
import { Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/cn/integrations/Hero'
import Notified from 'src/components/pages/cn/integrations/Notified'
import Extend from 'src/components/pages/cn/integrations/Extend'
import CustomIntegrations from 'src/components/pages/cn/integrations/CustomIntegrations'
import Notifications from 'src/components/pages/cn/integrations/Notifications'

const Integrations = ({ location }) => (
  <HomeLayout
    prefooter={NewToServerlessPrefooter}
    transparentHeader={true}
    pathName={location.pathname}
  >
    <Helmet
      title='Serverless 信息整合 |  Serverless integrations'
      description='在潜在问题影响服务质量之前获取通知。通过信息整理渠道，可以将报错，内存使用率，异常持续时间等信息高效下发到企业微信，电子邮箱等。'
      keywords='Serverless信息整合,Serverlessintegrations,Serverless 信息整合方案'
      location={location}
    />
    <Hero />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <Notified />
        <CustomIntegrations />
        <Notifications />
        {/* <Extend /> */}
      </AppContainer>
    </Background>

    {/*
    <Background background='#f7f7f7'>
      <WhitepaperDownloadBanner />
    </Background>
     */}
  </HomeLayout>
)

export default Integrations
