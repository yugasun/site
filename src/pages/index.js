import React from 'react'
import { Helmet, NewToServerlessPrefooter } from 'src/fragments'
import HomeLayout from 'src/layouts/Home'
import Hero from 'src/components/pages/home/Hero'
import Users from 'src/components/pages/home/Users'
import Paradigm from 'src/components/pages/home/Paradigm'
import FrameworkEditions from 'src/components/pages/home/FrameworkEditions'
import Guide from 'src/components/pages/home/Guide'

const Homepage = ({ location }) => (
  <HomeLayout
    prefooter={NewToServerlessPrefooter}
    transparentHeader={true}
    startWithWhiteHeader={true}
  >
    <Helmet
      title='Serverless - The Serverless Application Framework powered by AWS Lambda, API Gateway, and more'
      description='Build web, mobile and IoT applications using AWS Lambda and API Gateway, Azure Functions, Google Cloud Functions, and more.'
      location={location}
    />
    <Hero />
    <FrameworkEditions />
    <Users />
    <Paradigm />
    <Guide />
  </HomeLayout>
)

export default Homepage
