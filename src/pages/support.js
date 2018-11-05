import React from 'react'

import { TrustedClientsNew as TrustedClients, Helmet, NewToServerlessPrefooterNew as NewToServerlessPrefooter} from 'src/fragments'
import DefaultLayout from 'src/layouts/DefaultNew'
import Hero from 'src/components/pages/support/Hero'
import Content from 'src/components/pages/support/Content'

const Home = ({ location }) => {
  return (
    <DefaultLayout prefooter={NewToServerlessPrefooter} transparentHeader={true}>
      <Helmet
        title='Serverless Support'
        location={location}
      />
      <Hero />
      <Content />
      <TrustedClients />
    </DefaultLayout>
  )
}

export default Home
