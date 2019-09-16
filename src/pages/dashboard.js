import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Home'
import { NewToServerlessPrefooter } from 'src/fragments'
import { Background, Box } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/dashboard/Hero'
import SinglePane from 'src/components/pages/dashboard/SinglePane'
import StageSpecific from 'src/components/pages/dashboard/StageSpecific'
import SecurelyManaged from 'src/components/pages/dashboard/SecurelyManaged'
import ForTeams from 'src/components/pages/dashboard/ForTeams'
import WhitepaperDownloadBanner from 'src/components/pages/framework/Whitepaper'

const Policies = ({ location }) => (
  <HomeLayout
    prefooter={NewToServerlessPrefooter}
    transparentHeader={true}
    startWithWhiteHeader={true}
  >
    <Helmet title='Serverless Policies' location={location} />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <Hero />
        <SinglePane />
        <StageSpecific />
        <SecurelyManaged />
        <ForTeams />
      </AppContainer>
    </Background>

    <Background background='linear-gradient(to bottom, #f7f7f7 30%, #000 30%);'>
      <Box pb={[0, 0, 0, 0, 0, 142]}>
        <WhitepaperDownloadBanner />
      </Box>
    </Background>
  </HomeLayout>
)

export default Policies
