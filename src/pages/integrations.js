import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Home'
import { NewToServerlessPrefooter } from 'src/fragments'
import { Background, Box } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/integrations/Hero'
import WhitepaperDownloadBanner from 'src/components/pages/framework/Whitepaper'
import Notified from 'src/components/pages/integrations/Notified'
import CustomIntegrations from 'src/components/pages/integrations/CustomIntegrations'
import Notifications from 'src/components/pages/integrations/Notifications'

const Integrations = ({ location }) => (
  <HomeLayout
    prefooter={NewToServerlessPrefooter}
    transparentHeader={true}
    startWithWhiteHeader={true}
  >
    <Helmet title='Serverless Integrations' location={location} />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <Hero />
        <Notified />
        <CustomIntegrations />
        <Notifications />
      </AppContainer>
    </Background>

    <Background background='linear-gradient(to bottom, #f7f7f7 30%, #000 30%);'>
      <Box pb={[0, 0, 0, 0, 0, 142]}>
        <WhitepaperDownloadBanner />
      </Box>
    </Background>
  </HomeLayout>
)

export default Integrations
