import React from 'react'
import { ThemeProvider, Background } from 'serverless-design-system'

import { Helmet } from 'src/fragments'
import DefaultLayout from 'src/layouts/DefaultNewest'
import { Box } from 'src/fragments/DesignSystem'
import SubscribeBoxes from 'src/components/pages/subscribe/Boxes'
import SpinningWheels from 'src/components/pages/subscribe/SpinningWheels'
import EnterpriseContactForm from 'src/components/pages/enterprise/Form/index.js'
import { AppContainerNewest as AppContainer } from 'src/components'

const EnterpriseContact = () => (
  <DefaultLayout transparentHeader={true} noFooter={true}>
    <Helmet title='Serverless Enterprise Contact' />
    <Box.OnlyMobile mt={'43px'} />
    <Background
      background={[
        'white',
        'white',
        'linear-gradient(139deg,rgb(0,0,0) 61%,#7d2724)',
      ]}
      height={['120vh', '120vh', '130vh', '160vh', '100vh']}
      width={[1, 1, 1, 1, 1]}
    >
      <AppContainer>
        <SpinningWheels />
        <EnterpriseContactForm />
      </AppContainer>
    </Background>
  </DefaultLayout>
)

export default EnterpriseContact
