import React from 'react'

import { Helmet } from 'src/fragments'
import DefaultLayout from 'src/layouts/Home'
import Hero from 'src/components/pages/framework/Hero'
import Lifecycle from 'src/components/pages/framework/Lifecycle'
import Pricing from 'src/components/pages/framework/Pricing'
import Why from 'src/components/pages/framework/Why'
import UseCases from 'src/components/pages/framework/UseCases'
import Features from 'src/components/pages/framework/Features'
import { NewToServerlessPrefooter } from 'src/fragments'
import { AppContainer } from 'src/components'

const FrameWorks = ({ location }) => (
  <DefaultLayout prefooter={NewToServerlessPrefooter} transparentHeader={true}>
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
      <Features />
      <Pricing />
    </AppContainer>
  </DefaultLayout>
)

export default FrameWorks
