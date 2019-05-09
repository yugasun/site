import React from 'react'

import DefaultLayout from 'src/layouts/DefaultNewest'
import { Helmet } from 'src/fragments'
import { AppContainerNewest as AppContainer } from 'src/components'
import Hero from 'src/components/pages/acceleration/Hero/'
import WhoWeAre from 'src/components/pages/acceleration/WeAre/'
import WhoWeHelped from 'src/components/pages/acceleration/WeHelped/'
import ProgramFor from 'src/components/pages/acceleration/ProgramFor/'
import YouGet from 'src/components/pages/acceleration/YouGet/'
import EnterpriseContactForm from 'src/components/pages/acceleration/Form/'

const Acceleration = () => {
  return (
    <DefaultLayout>
      <Helmet title='Serverless Acceleration Program' />
      <Hero />
      <AppContainer>
        <WhoWeAre />
        <WhoWeHelped />
        <ProgramFor />
        <YouGet />
        <EnterpriseContactForm />
      </AppContainer>
    </DefaultLayout>
  )
}

export default Acceleration
