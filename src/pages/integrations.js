import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Newest'
import { NewToServerlessPrefooter, WhitepaperDownloadBanner } from 'src/fragments'
import { Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/integrations/Hero'
import Notified from 'src/components/pages/integrations/Notified'
import Extend from 'src/components/pages/integrations/Extend'
import CustomIntegrations from 'src/components/pages/integrations/CustomIntegrations'
import Notifications from 'src/components/pages/integrations/Notifications'

const Integrations = ({ location }) => (
  <HomeLayout prefooter={NewToServerlessPrefooter} transparentHeader={true}>
    <Helmet title='Serverless Integrations' location={location} />
    <Hero />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <Notified />
        <CustomIntegrations />
        <Notifications />
        <Extend />
      </AppContainer>
    </Background>

    <Background background='#f7f7f7'>
      <WhitepaperDownloadBanner />
    </Background>
  </HomeLayout>
)

export default Integrations
