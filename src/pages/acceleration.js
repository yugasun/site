import React from 'react'
import DefaultLayout from 'src/layouts/DefaultNewest'
import { Background } from 'serverless-design-system'
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
      </AppContainer>
      <Background background='#f7f7f7'>
        <AppContainer>
          <ProgramFor />
          <YouGet />
        </AppContainer>
      </Background>
      <Background background='#eaeaea'>
        <AppContainer>
          <EnterpriseContactForm />
        </AppContainer>
      </Background>
    </DefaultLayout>
  )
}

export default Acceleration
