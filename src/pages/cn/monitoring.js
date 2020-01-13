import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/cn/Newest'
import {
  NewToServerlessPrefooter,
  WhitepaperDownloadBanner,
} from 'src/fragments'
import { Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/cn/monitoring/Hero'
import Easy from 'src/components/pages/cn/monitoring/Easy'
import Confidence from 'src/components/pages/cn/monitoring/Confidence'
import AllSignal from 'src/components/pages/cn/monitoring/AllSignal'

const Monitoring = ({ location }) => (
  <HomeLayout
    prefooter={NewToServerlessPrefooter}
    transparentHeader={true}
    pathName={location.pathname}
  >
    <Helmet
      title='Serverless 监控 |  Serverless monitoring'
      description='针对 Serverless 应用程序即时强大的指标监控，包括资源使用率，性能，报错等。'
      keywords='Serverless监控,Serverless监控解决方案,Serverless监控方案, Serverless应用监控'
      location={location}
      noIndex={true}
    />
    <Hero />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <Easy />
        <Confidence />
        <AllSignal />
      </AppContainer>
    </Background>

    {/*
      <Background background='#f7f7f7'>
      <WhitepaperDownloadBanner />
    </Background>
     */}
  </HomeLayout>
)

export default Monitoring
