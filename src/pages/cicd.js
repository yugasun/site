import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Newest'
import { NewToServerlessPrefooter, WhitepaperDownloadBanner } from 'src/fragments'
import { Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/cicd/Hero'

const CiCd = ({ location }) => (
  <HomeLayout prefooter={NewToServerlessPrefooter} transparentHeader={true}>
    <Helmet title='Serverless CI/CD' location={location} />
    <Hero />
    <Background background={'#f7f7f7'}>
      <AppContainer>
      </AppContainer>
    </Background>

    <Background background='#f7f7f7'>
      <WhitepaperDownloadBanner />
    </Background>
  </HomeLayout>
)

export default CiCd
