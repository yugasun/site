import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Newest'
import { NewToServerlessPrefooter, WhitepaperDownloadBanner } from 'src/fragments'
import { Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/monitoring/Hero'
import Easy from 'src/components/pages/monitoring/Easy'
import Confidence from 'src/components/pages/monitoring/Confidence'
import AllSignal from 'src/components/pages/monitoring/AllSignal'

const Monitoring = ({ location }) => (
  <HomeLayout prefooter={NewToServerlessPrefooter} transparentHeader={true}>
    <Helmet title='Serverless Monitoring | Monitor AWS Lambda, API Gateway, AppSync, Azure Functions & more' 
    description='Easily monitor everything in your serverless architecture, from AWS Lambda, S3, API Gateway, DynamoDB and more with the Serverless Framework.'
    keywords='aws lambda, aws lambda monitoring, serverless monitoring, serverless architecture'
    location={location} />
    <Hero />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <Easy />
        <Confidence />
        <AllSignal />
      </AppContainer>
    </Background>

    <Background background='#f7f7f7'>
      <WhitepaperDownloadBanner />
    </Background>
  </HomeLayout>
)

export default Monitoring
