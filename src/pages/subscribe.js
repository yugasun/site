import React from 'react'
import { ThemeProvider, Background } from 'serverless-design-system'

import { Helmet } from 'src/fragments'
import DefaultNoFooterLayout from 'src/layouts/DefaultNoFooter'
import { Box } from 'src/fragments/DesignSystem'
import SubscribeBoxes from 'src/components/pages/subscribe/Boxes'
import SpinningWheels from 'src/components/pages/subscribe/SpinningWheels'

const SubscribePage = () => (
  <ThemeProvider>
    <DefaultNoFooterLayout transparentHeader={true}>
      <Helmet title='Serverless Newsletter Subscription Page' />
      <Box.OnlyMobile mt={'43px'} />
      <Background
        background={[
          'white',
          'white',
          'linear-gradient(139deg,rgb(0,0,0) 61%,#7d2724)',
        ]}
        height={['100vh', '100vh', '130vh', '130vh', '100vh']}
      >
        <SpinningWheels />
        <SubscribeBoxes />
      </Background>
    </DefaultNoFooterLayout>
  </ThemeProvider>
)

export default SubscribePage
