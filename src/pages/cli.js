import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Newest'
import { NewToServerlessPrefooter } from 'src/fragments'
import { Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/cli/Hero'
import Build from 'src/components/pages/cli/Build'
import Deploy from 'src/components/pages/cli/Deploy'
import Run from 'src/components/pages/cli/Run'
import WhitepaperDownloadBanner from 'src/components/pages/framework/Whitepaper'
import CommunityNumbers from 'src/components/pages/cli/Community/index.js'

const CLI = ({ location }) => (
  <HomeLayout prefooter={NewToServerlessPrefooter} transparentHeader={true}>
    <Helmet title='Serverless CLI' location={location} />
    <Hero />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <CommunityNumbers />
        <Build />
        <Deploy />
        <Run />
      </AppContainer>
    </Background>

    <Background background='#f7f7f7'>
      <WhitepaperDownloadBanner />
    </Background>
  </HomeLayout>
)

export default CLI
