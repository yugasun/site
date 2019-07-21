import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Home'
import Hero from 'src/components/pages/enterprise/Hero'
import Features from 'src/components/pages/enterprise/Features'
import Brands from 'src/components/pages/enterprise/Brands'
import Form from 'src/components/pages/enterprise/Form'
import { NewToServerlessPrefooter } from 'src/fragments'
import { Background, Box } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import WhitepaperDownloadBanner from 'src/components/pages/framework/Whitepaper'

const Enterprise = ({ location }) => (
  <HomeLayout prefooter={NewToServerlessPrefooter} startWithWhiteHeader={false}>
    <Helmet title='Serverless Framework Enterprise' location={location} />
    <Hero />
    <Background background={'black'}>
      <AppContainer>
        <Features />
        <Form customPb={[74, 74, 74, 74, 115]} />
        <Brands />
      </AppContainer>
    </Background>

    <Background background='black'>
      <Box pb={[0, 0, 0, 0, 0, 142]}>
        <WhitepaperDownloadBanner />
      </Box>
    </Background>
  </HomeLayout>
)

export default Enterprise
