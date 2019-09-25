import React from 'react'
import { Helmet } from 'src/fragments'
import DefaultLayout from 'src/layouts/Default'
import Hero from 'src/components/pages/home/Hero'
import UserTweets from 'src/components/pages/home/UserTweets'
import Paradigm from 'src/components/pages/home/Paradigm'
import FrameworkEditions from 'src/components/pages/home/FrameworkEditions'

const Homepage = ({ location }) => (
  <DefaultLayout>
    <Helmet
      title='Serverless - The Serverless Application Framework powered by AWS Lambda, API Gateway, and more'
      description='Build web, mobile and IoT applications using AWS Lambda and API Gateway, Azure Functions, Google Cloud Functions, and more.'
      location={location}
    />
    <Hero />
    <FrameworkEditions />
    <UserTweets />
    <Paradigm />
  </DefaultLayout>
)

export default Homepage
