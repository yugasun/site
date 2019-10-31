import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Newest'
import { NewToServerlessPrefooter, WhitepaperDownloadBanner } from 'src/fragments'
import { Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/cicd/Hero'
import PreviewDeploys from '../components/pages/cicd/PreviewDeploys'
import SecurityBuiltIn from '../components/pages/cicd/SecurityBuiltIn'
import EasySetup from '../components/pages/cicd/EasySetup'
import FAQ from '../components/pages/cicd/FAQ'

const CiCd = ({ location }) => (
  <HomeLayout prefooter={NewToServerlessPrefooter} transparentHeader={true}>
    <Helmet title='Serverless CI/CD' location={location} />
    <Hero />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <EasySetup/>
        <PreviewDeploys/>
        <SecurityBuiltIn/>
        <FAQ/>
      </AppContainer>
    </Background>

    <Background background='#f7f7f7'>
      <WhitepaperDownloadBanner />
    </Background>
  </HomeLayout>
)

export default CiCd
