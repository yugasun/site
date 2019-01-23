import React from 'react'

import DefaultLayout from 'src/layouts/DefaultNew'
import Hero from 'src/components/pages/resources/workshop-form/Hero'
import Form from 'src/components/pages/resources/workshop-form/Form'
import {
  NewToServerlessPrefooterNew as NewToServerlessPrefooter,
  Helmet,
} from 'src/fragments'
import workshops from 'src/constants/workshops.json'

const ResourcesMeetups = ({ pathContext: { key } }) => {
  return (
    <DefaultLayout prefooter={NewToServerlessPrefooter} transparentHeader>
      <Helmet
        title={`Serverless Workshop ${
          workshops[key]['name']
        } | AWS Lambda, Google Functions & Cloud Computing`}
      />
      <Hero keyName={key} />
      <Form keyName={key} />
    </DefaultLayout>
  )
}

export default ResourcesMeetups
