import React from 'react'

import { Helmet } from 'src/fragments'
import DefaultLayout from 'src/layouts/Home'
import Hero from 'src/components/pages/framework/Hero'
import Lifecycle from 'src/components/pages/framework/Lifecycle'
import Pricing from 'src/components/pages/framework/Pricing'
import Why from 'src/components/pages/framework/Why'
import UseCases from 'src/components/pages/framework/UseCases'
import Features from 'src/components/pages/framework/Features'
import WhitepaperDownload from 'src/components/pages/framework/Whitepaper'
import { NewToServerlessPrefooter } from 'src/fragments'
import { AppContainer } from 'src/components'
import { Background, Box } from 'serverless-design-system'

const FrameWorks = ({ location }) => (
  <DefaultLayout
    prefooter={NewToServerlessPrefooter}
    transparentHeader={true}
    frameworkPage={true}
    startWithWhiteHeader={true}
  >
    <Helmet
      title='Serverless Framework - Build applications on AWS Lambda, Google CloudFunctions, Azure Functions, AWS Flourish and more'
      description='The application framework for building web, mobile and IoT applications on AWS Lambda, Google CloudFunctions, Azure Functions, IBM OpenWhisk, AWS Flourish and more.'
      location={location}
    />
    <Hero />
    <AppContainer>
      <Why />
      <UseCases />
      <Lifecycle />
    </AppContainer>
    <Box mt={[92, 92, 92, 92, 162]}>
      <Background background='#f7f7f7'>
        <AppContainer>
          <Features />
          <Pricing />
        </AppContainer>
        <Background background='linear-gradient(to bottom, #f7f7f7 60%, #000 40%);'>
          <WhitepaperDownload />
        </Background>
      </Background>
    </Box>
  </DefaultLayout>
)

export default FrameWorks
