import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Newest'
import { NewToServerlessPrefooter, WhitepaperDownloadBanner } from 'src/fragments'
import { Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/alerts/Hero'
import DevelopDeployMonitor from 'src/components/pages/alerts/DevelopDeploy'
import NoFirehoses from 'src/components/pages/alerts/NoFirehoses'
import ActionableAlerting from 'src/components/pages/alerts/ActionableAlerting'

const Alerts = ({ location }) => (
  <HomeLayout prefooter={NewToServerlessPrefooter} transparentHeader={true}>
    <Helmet
      title='Serverless Alerts | Real-time Alerts for AWS Lambda, API Gateway, AppSync & Serverless Architectures'
      description='Zero-config, smart alerts for serverless architectures running on AWS Lambda, API Gateway, AppSync in real-time.  Detect errors, timeouts, increased transactions, cost information, unusual error rates, approaching timeout limits and much more.'
      keywords='aws lambda alerts, aws lambda errors, aws lambda timeouts, aws lambda cost'
      location={location} />

    <Hero />

    <Background background={'#f7f7f7'}>
      <AppContainer>
        <DevelopDeployMonitor />
        <NoFirehoses />
        <ActionableAlerting />
      </AppContainer>
    </Background>

    <Background background='#f7f7f7'>
      <WhitepaperDownloadBanner />
    </Background>
  </HomeLayout>
)

export default Alerts
