import React from 'react'

import { TrustedClientsNew as TrustedClients, Helmet, NewToServerlessPrefooterNew as NewToServerlessPrefooter} from 'src/fragments'
import DefaultLayout from 'src/layouts/DefaultNew'
import Hero from 'src/components/pages/platform/Hero'
import Content from 'src/components/pages/platform/Content'

const Home = ({ location }) => {
  return (
    <DefaultLayout prefooter={NewToServerlessPrefooter} transparentHeader={true}>
      <Helmet
        title='Serverless Platform'
        location={location}
      />
      <Hero />
      <Content />
      <TrustedClients />
    </DefaultLayout>
  )
}

export default Home
