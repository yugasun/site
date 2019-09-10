import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Home'
import { NewToServerlessPrefooter } from 'src/fragments'
import { Background, Box } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/alerts/Hero'
import OptimumPerformance from 'src/components/pages/alerts/OptimumPerformance'
import WhitepaperDownloadBanner from 'src/components/pages/framework/Whitepaper'
import DevelopDeployMonitor from 'src/components/pages/alerts/DevelopDeploy'
import NoFirehoses from 'src/components/pages/alerts/NoFirehoses'
import ActionableAlerting from 'src/components/pages/alerts/ActionableAlerting'

const Alerts = ({ location }) => (
  <HomeLayout
    prefooter={NewToServerlessPrefooter}
    transparentHeader={true}
    startWithWhiteHeader={true}
  >
    <Helmet title='Serverless Alerts' location={location} />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <Hero />
        <OptimumPerformance />
        <DevelopDeployMonitor />
        <NoFirehoses />
        <ActionableAlerting />
      </AppContainer>
    </Background>

    <Background background='linear-gradient(to bottom, #f7f7f7 30%, #000 30%);'>
      <Box pb={[0, 0, 0, 0, 0, 142]}>
        <WhitepaperDownloadBanner />
      </Box>
    </Background>
  </HomeLayout>
)

export default Alerts
