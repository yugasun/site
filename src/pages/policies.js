import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Newest'
import { NewToServerlessPrefooter, WhitepaperDownloadBanner } from 'src/fragments'
import { Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/policies/Hero'
import IndustryStandard from 'src/components/pages/policies/IndustryStandard'
import CustomPolicies from 'src/components/pages/policies/CustomPolicies'
import ZeroCode from 'src/components/pages/policies/ZeroCode'

const Policies = ({ location }) => (
  <HomeLayout prefooter={NewToServerlessPrefooter} transparentHeader={true}>
    <Helmet title='Serverless Policies' location={location} />
    <Hero />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <IndustryStandard />
        <CustomPolicies />
        <ZeroCode />
      </AppContainer>
    </Background>

    <Background background='#f7f7f7'>
      <WhitepaperDownloadBanner />
    </Background>
  </HomeLayout>
)

export default Policies
