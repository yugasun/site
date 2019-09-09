import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Home'
import { NewToServerlessPrefooter } from 'src/fragments'
import { Background, Box, Flex } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/monitoring/Hero'
import Easy from 'src/components/pages/monitoring/Easy'
import WhitepaperDownloadBanner from 'src/components/pages/framework/Whitepaper'

const Monitoring = ({ location }) => (
  <HomeLayout
    prefooter={NewToServerlessPrefooter}
    transparentHeader={true}
    startWithWhiteHeader={true}
  >
    <Helmet title='Serverless Monitoring' location={location} />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <Hero />
        <Easy />
      </AppContainer>
    </Background>

    <Background background='linear-gradient(to bottom, #f7f7f7 30%, #000 30%);'>
      <Box pb={[0, 0, 0, 0, 0, 142]}>
        <WhitepaperDownloadBanner />
      </Box>
    </Background>
  </HomeLayout>
)

export default Monitoring
