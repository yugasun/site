import React from 'react'

import { Helmet } from 'src/fragments'
import DefaultLayout from 'src/layouts/DefaultNew'
import Hero from 'src/components/pages/enterprise/Hero'
import Features from 'src/components/pages/enterprise/Features'
import Benefits from 'src/components/pages/enterprise/Benefits'
import Form from 'src/components/pages/enterprise/Form'
import Compare from 'src/components/pages/enterprise/Compare'
import { NewToServerlessPrefooterNew as NewToServerlessPrefooter } from 'src/fragments'
import { Background } from 'serverless-design-system'
import { AppContainerNewest as AppContainer } from 'src/components'

const Enterprise = ({ location }) => (
  <DefaultLayout prefooter={NewToServerlessPrefooter}>
    <Helmet title='Serverless Framework Enterprise' location={location} />
    <Hero />
    <Background
      background={[
        'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
        'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
        `linear-gradient(132deg,rgb(0,0,0) 70%,#70221f)`,
      ]}
    >
      <AppContainer>
        <Features />
        <Benefits />
        <Form />
      </AppContainer>
    </Background>
    <AppContainer>
      <Compare />
    </AppContainer>
  </DefaultLayout>
)

export default Enterprise
