import React from 'react'

import DefaultLayout from 'src/layouts/DefaultNewest'
import Hero from 'src/components/pages/learn/manifesto/Hero'
import Commandments from 'src/components/pages/learn/manifesto/Commandments'
import What from 'src/components/pages/learn/manifesto/What'
import { Helmet } from 'src/fragments'
import prefooter from 'src/components/pages/learn/Prefooter.js'
import { AppContainer } from 'src/components'

const Overview = ({ location }) => (
  <DefaultLayout prefooter={prefooter} transparentHeader>
    <Helmet
      title='Serverless Manifesto'
      description='Serverless Manifesto'
      location={location}
    />
    <Hero />
    <AppContainer>
      <What />
      <Commandments />
    </AppContainer>
  </DefaultLayout>
)

export default Overview
