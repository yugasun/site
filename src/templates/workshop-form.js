import React from 'react'

import DefaultLayout from 'src/layouts/Default'
import Hero from 'src/components/pages/resources/workshop-form/Hero'
import Form from 'src/components/pages/resources/workshop-form/Form'
import { NewToServerlessPrefooter } from 'src/fragments'

const ResourcesMeetups = ({ pathContext: { key } }) => {
  return (
    <DefaultLayout prefooter={NewToServerlessPrefooter} transparentHeader>
      <Hero keyName={key} />
      <Form keyName={key} />
    </DefaultLayout>
  )
}

export default ResourcesMeetups
