import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Newest'
import { NewToServerlessPrefooter, WhitepaperDownloadBanner } from 'src/fragments'
import { Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/debugging/Hero'
import InvocationsExplorer from 'src/components/pages/debugging/InvocationsExplorer'
import StraightToCode from 'src/components/pages/debugging/StraightToCode'
import NoMoreCloudWatch from 'src/components/pages/debugging/NoMoreCloudWatch'

const Debugging = ({ location }) => (
  <HomeLayout prefooter={NewToServerlessPrefooter} transparentHeader={true}>
    <Helmet title='Serverless Debugging | Debug AWS Lambda, API Gateway, AppSync, Azure Functions & more' 
    description='Easily debug functions and all services in your serverless architecture, like AWS Lambda, S3, API Gateway, DynamoDB and more.  Query across every invocations to see errors, logs, cold starts, spans, durations, HTTP calls and more.'
    keywords='aws lambda, aws lambda debugging, serverless debugging, serverless architecture'
    location={location} />
    <Hero />
    <Background background={'#f7f7f7'}>
      <AppContainer>
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
