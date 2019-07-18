import React from 'react'

import { Helmet } from 'src/fragments'
import DefaultLayout from 'src/layouts/DefaultNewest'
import Hero from 'src/components/pages/enterprise/Hero'
import Features from 'src/components/pages/enterprise/Features'
import Benefits from 'src/components/pages/enterprise/Benefits'
import Testimonial from 'src/components/pages/enterprise/Testimonial'
import Compare from 'src/components/pages/enterprise/Compare'
import { NewToServerlessPrefooter } from 'src/fragments'
import { Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'

const Enterprise = ({ location }) => (
  <DefaultLayout prefooter={NewToServerlessPrefooter}>
    <Helmet title='Serverless Framework Enterprise' location={location} />
    <Hero />
    <Background
      background={[
        'linear-gradient(150deg,rgb(0,0,0) 74%,#70221f)',
        'linear-gradient(150deg,rgb(0,0,0) 74%,#70221f)',
        'linear-gradient(150deg,rgb(0,0,0) 81%,#70221f)',
        'linear-gradient(150deg,rgb(0,0,0) 85%,#70221f)',
        'linear-gradient(150deg,rgb(0,0,0) 77%,#70221f)',
        `linear-gradient(132deg,rgb(0,0,0) 79%,#70221f)`,
      ]}
    >
      <AppContainer>
        <Features />
        <Benefits />
      </AppContainer>
    </Background>
    <Testimonial />
    <AppContainer>
      <Compare />
    </AppContainer>
  </DefaultLayout>
)

export default Enterprise
