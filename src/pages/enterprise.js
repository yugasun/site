import React from 'react'

import { TrustedClients, Helmet, NewToServerlessPrefooter } from 'src/fragments'
import DefaultLayout from 'src/layouts/Default'
import Content from 'src/components/pages/enterprise/Content'

const Enterprise = ({ location }) => {
  return (
    <DefaultLayout prefooter={NewToServerlessPrefooter}>
      <Helmet title="Serverless Enterprise" location={location} />
      <Content />
      <TrustedClients />
    </DefaultLayout>
  )
}

export default Enterprise
