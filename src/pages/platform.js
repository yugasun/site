import React from 'react'

import { TestimonialNew as Testimonial, TrustedClientsNew as TrustedClients, Helmet, NewToServerlessPrefooterNew as NewToServerlessPrefooter} from 'src/fragments'
import DefaultLayout from 'src/layouts/DefaultNew'
import Hero from 'src/components/pages/platform/Hero'
import Content from 'src/components/pages/platform/Content'

const Home = ({ location }) => {
  return (
    <DefaultLayout prefooter={NewToServerlessPrefooter} transparentHeader={true}>
      <Helmet
        title='Serverless - The Serverless Application Framework powered by AWS Lambda, API Gateway, and more'
        description='Build web, mobile and IoT applications using AWS Lambda and API Gateway, Azure Functions, Google Cloud Functions, and more.'
        location={location}
      />
      <Hero />
      <Content />
      <TrustedClients />
    </DefaultLayout>
  )
}

export default Home
