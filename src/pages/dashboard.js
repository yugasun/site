import React from 'react'
import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Newest'
import { Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/dashboard/Hero'
import SinglePane from 'src/components/pages/dashboard/SinglePane'
import StageSpecific from 'src/components/pages/dashboard/StageSpecific'
import SecurelyManaged from 'src/components/pages/dashboard/SecurelyManaged'
import ForTeams from 'src/components/pages/dashboard/ForTeams'
import WhitepaperDownloadBanner from 'src/components/pages/framework/Whitepaper'

const Dashboard = ({ location }) => (
  <HomeLayout transparentHeader={true}>
    <Helmet title='Serverless Dashboard' location={location} />
    <Hero />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <SinglePane />
        <StageSpecific />
        <SecurelyManaged />
        <ForTeams />
      </AppContainer>
    </Background>

    <Background background='#f7f7f7'>
      <WhitepaperDownloadBanner />
    </Background>
  </HomeLayout>
)

export default Dashboard
