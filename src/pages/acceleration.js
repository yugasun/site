import React from 'react'
import DefaultLayout from 'src/layouts/DefaultNewest'
import { Background, Box, Absolute } from 'serverless-design-system'
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
      <Background background='#f7f7f7' backgroundSize='cover'>
        <AppContainer>
          <ProgramFor />
          <YouGet />
        </AppContainer>
      </Background>
      <Background
        background='#eaeaea'
        backgroundSize='cover'
        height={[1526, 1526, 1143, 1143, 490]}
      >
        <Absolute left={['0', '0', '0', '13.5%', '13.5%']}>
          <Box mt={[-80, -80, -80, -80, -250]} pb={[132, 132, 132, 132, 192]}>
            <AppContainer>
              <EnterpriseContactForm />
            </AppContainer>
          </Box>
        </Absolute>
      </Background>
    </DefaultLayout>
  )
}

export default Acceleration
