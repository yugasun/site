import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Newest'
import { NewToServerlessPrefooter, WhitepaperDownloadBanner } from 'src/fragments'
import { Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/partners/tencent/english/Hero'
import ExpressJS from 'src/components/pages/partners/tencent/english/ExpressJS'
import CloudObjectStore from 'src/components/pages/partners/tencent/english/CloudObjectStore'
import RestAPI from 'src/components/pages/partners/tencent/english/RestAPI'

const TencentPartnerPageEnglish = ({ location }) => (
  <HomeLayout prefooter={NewToServerlessPrefooter} transparentHeader={true}>
    <Helmet title='Next Generation Serverless Cloud | Tencent + Serverless Framework' 
    description='Tencent Cloud and Serverless have joined forces to create a serverless cloud focused on delivering outcomes, not infrastructure. Everything autoscaling; never pay for idle.'
    location={location} />
    <Hero />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <ExpressJS />
        <CloudObjectStore />
        <RestAPI />
      </AppContainer>
    </Background>

    <Background background='#f7f7f7'>
      <WhitepaperDownloadBanner />
    </Background>
  </HomeLayout>
)

export default TencentPartnerPageEnglish
