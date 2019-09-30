import React from 'react'
import { ThemeProvider, Background } from 'serverless-design-system'

import { Helmet } from 'src/fragments'
import DefaultLayout from 'src/layouts/DefaultNewest'
import { Box } from 'src/fragments/DesignSystem'
import SubscribeBoxes from 'src/components/pages/subscribe/Boxes'

const SubscribePage = () => (
  <ThemeProvider>
    <DefaultLayout transparentHeader={true} noFooter={true}>
      <Helmet title='Serverless Newsletter Subscription Page' />
      <Box.OnlyMobile mt={'43px'} />
      <Background
        background={[
          'white',
          'white',
          'linear-gradient(139deg,rgb(0,0,0) 61%,#7d2724)',
        ]}
        height={['100vh', '100vh', '130vh', '130vh', '100vh']}
        width={1}
      >
        <SubscribeBoxes />
      </Background>
    </DefaultLayout>
  </ThemeProvider>
)

export default SubscribePage
