import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Home'
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

    <Background background='linear-gradient(to bottom, #f7f7f7 30%, #000 30%);'>
      <Box pb={[0, 0, 0, 0, 0, 142]}>
        <WhitepaperDownloadBanner />
      </Box>
    </Background>
  </HomeLayout>
)

export default Debugging
