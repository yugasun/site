import React from 'react'
import { Background, ThemeProvider } from 'serverless-design-system'

import { Helmet } from 'src/fragments'
import Prefooter from 'src/components/PrefooterNew'
import DefaultLayout from 'src/layouts/DefaultNew'
import notFoundBackground from 'src/assets/images/404-background.jpg'
import { P, Box } from 'src/fragments/DesignSystem'
import styled from 'styled-components'

const BackgroundWithFilter = styled(Background)`
  -webkit-filter: brightness(0.40);
  filter: brightness(0.40);
`

const sentences = [
  (
  <P 
      key='message404'
      color='gray.3'
      mt={[76, 76, 79]}
    >
      It’s ok. You’re not the first one. Try any of the links on this page to get back on the right track.
    </P>
  )
]

const actions = [
  {
    name: 'go home',
    navProps: {
      to: '/',
      completed: true,
    },
  },
  {
    name: 'about serverless',
    navProps: {
      to: '/learn/overview',
      completed: true,
    },
  },
  {
    name: 'signup',
    navProps: {
      to: 'https://dashboard.serverless.com',
      crossDomain: true,
    },
  },
]

const prefooter = () => (
  <Prefooter
    heading='It looks like you’re lost.'
    sentences={sentences}
    actions={actions}
  />
)

const NotFoundPage = () => (
  <ThemeProvider>
    <DefaultLayout prefooter={prefooter} transparentHeader={true}>
      <Helmet title='404 - Page not found' />
      <Box.OnlyMobile mt={'43px'} />
      <BackgroundWithFilter
        backgroundImage={`url(${notFoundBackground})`}
        backgroundSize={['contain', 'contain', 'cover']}
        height={['650px', '650px', '850px']}
      />
    </DefaultLayout>
  </ThemeProvider>
)

export default NotFoundPage

