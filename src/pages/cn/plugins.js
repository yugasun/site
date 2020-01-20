  import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/cn/Newest'
import { NewToServerlessPrefooter } from 'src/fragments/cn'
import { Background, Box } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/cn/plugins/Hero'
import Simplicity from 'src/components/pages/cn/plugins/Simplicity'
import Reusability from 'src/components/pages/cn/plugins/Reusability'
import Agnostic from 'src/components/pages/cn/plugins/Agnostic'

const Components = ({ location }) => (
  <HomeLayout prefooter={NewToServerlessPrefooter} transparentHeader={true}>
    <Helmet title='Serverless Components' location={location} noIndex={true} />
    <Hero />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <Simplicity />
        <Reusability />
        <Agnostic />
      </AppContainer>
    </Background>

    {/*
      <Background background='#f7f7f7'>
          <WhitepaperDownloadBanner />
        </Background>
    */}
  </HomeLayout>
)

export default Components
