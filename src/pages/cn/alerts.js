import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/cn/Newest'
import {
  NewToServerlessPrefooter,
  WhitepaperDownloadBanner,
} from 'src/fragments'
import { Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/cn/alerts/Hero'
import DevelopDeployMonitor from 'src/components/pages/cn/alerts/DevelopDeploy'
import NoFirehoses from 'src/components/pages/cn/alerts/NoFirehoses'
import ActionableAlerting from 'src/components/pages/cn/alerts/ActionableAlerting'

const Alerts = ({ location }) => (
  <HomeLayout
    prefooter={NewToServerlessPrefooter}
    transparentHeader={true}
    pathName={location.pathname}
  >
    <Helmet
      title='Serverless 告警 |  Serverless alerts'
      description='Serverless 会根据自动收集的数据生成一组预配置的告警信息。只需打开 Dashboard，部署并监控程序，无论是在部署之后，还是部署中的应用都可以看到由部署引起的错误和性能下降。'
      keywords='Serverless告警,Serverless告警解决方案,Serverless告警方案, Serverless应用告警'
      location={location}
    />

    <Hero />

    <Background background={'#f7f7f7'}>
      <AppContainer>
        <DevelopDeployMonitor />
        <NoFirehoses />
        <ActionableAlerting />
      </AppContainer>
    </Background>

    {/*
      <Background background='#f7f7f7'>
      <WhitepaperDownloadBanner />
    </Background>
     */}
  </HomeLayout>
)

export default Alerts
