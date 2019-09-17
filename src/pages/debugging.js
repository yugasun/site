import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Newest'
import { NewToServerlessPrefooter } from 'src/fragments'
import { Background, Box } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/debugging/Hero'
import InvocationsExplorer from 'src/components/pages/debugging/InvocationsExplorer'
import StraightToCode from 'src/components/pages/debugging/StraightToCode'
import NoMoreCloudWatch from 'src/components/pages/debugging/NoMoreCloudWatch'
import WhitepaperDownloadBanner from 'src/components/pages/framework/Whitepaper'

const Debugging = ({ location }) => (
  <HomeLayout
    prefooter={NewToServerlessPrefooter}
    transparentHeader={true}
    startWithWhiteHeader={true}
  >
    <Helmet title='Serverless Debugging' location={location} />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <Hero />
        <InvocationsExplorer />
        <StraightToCode />
        <NoMoreCloudWatch />
      </AppContainer>
    </Background>

    <Background background='#f7f7f7'>
      <WhitepaperDownloadBanner />
    </Background>
  </HomeLayout>
)

export default Debugging
