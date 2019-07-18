import React from 'react'

import {
  Helmet,
  NewToServerlessPrefooter,
} from 'src/fragments'
import HomeLayout from 'src/layouts/Home'
import Hero from 'src/components/pages/home/Hero'
import Community from 'src/components/pages/home/Community'
import Providers from 'src/components/pages/home/Providers'
import Guide from 'src/components/pages/home/Guide'

const Homepage = ({ location }) => (
  <HomeLayout prefooter={NewToServerlessPrefooter} transparentHeader={true}>
    <Helmet
      title='Serverless - The Serverless Application Framework powered by AWS Lambda, API Gateway, and more'
      description='Build web, mobile and IoT applications using AWS Lambda and API Gateway, Azure Functions, Google Cloud Functions, and more.'
      location={location}
    />
    <Hero />
    <Community />
    <Providers />
    <Guide />
  </HomeLayout>
)

export default Homepage
