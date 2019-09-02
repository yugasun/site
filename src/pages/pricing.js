import React from 'react'
import { Helmet } from 'src/fragments'
import DefaultLayout from 'src/layouts/Default'
import FrameworkEditions from 'src/components/pages/home/FrameworkEditions'

const PricingPage = ({ location }) => (
  <DefaultLayout>
    <Helmet
      title='Serverless - The Serverless Application Framework powered by AWS Lambda, API Gateway, and more'
      description='Build web, mobile and IoT applications using AWS Lambda and API Gateway, Azure Functions, Google Cloud Functions, and more.'
      location={location}
    />
    <FrameworkEditions />
  </DefaultLayout>
)

export default PricingPage
