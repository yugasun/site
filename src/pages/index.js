import React from 'react'

import { TestimonialNew as Testimonial, TrustedClientsNew as TrustedClients, Helmet, NewToServerlessPrefooterNew as NewToServerlessPrefooter} from 'src/fragments'
import DefaultLayout from 'src/layouts/DefaultNew'
import Hero from 'src/components/pages/home/Hero'
import Benefits from 'src/components/pages/home/Benefits'
import ServerlessGrowth from 'src/components/pages/home/ServerlessGrowth'
import AllInOne from 'src/components/pages/home/AllInOne'
import Incline from 'src/components/pages/home/Hero/Incline'
import DesktopTestimonialIncline from 'src/components/pages/home/Testimonial/DesktopIncline'
const Home = ({ location }) => {
  return (
    <DefaultLayout prefooter={NewToServerlessPrefooter} transparentHeader={true}>
      <Helmet
        title='Serverless - The Serverless Application Framework powered by AWS Lambda, API Gateway, and more'
        description='Build web, mobile and IoT applications using AWS Lambda and API Gateway, Azure Functions, Google Cloud Functions, and more.'
        location={location}
      />
      <Hero />
      <Incline />
      <Benefits />
      <ServerlessGrowth />
      <DesktopTestimonialIncline />
      <Testimonial />
      <AllInOne />
      <TrustedClients />
    </DefaultLayout>
  )
}

export default Home
