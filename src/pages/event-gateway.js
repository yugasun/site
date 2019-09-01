import React from 'react'

import DefaultLayout from 'src/layouts/DefaultNewest'
import Hero from 'src/components/pages/event-gateway/Hero'
import UseCase from 'src/components/pages/event-gateway/UseCase'
import Features from 'src/components/pages/event-gateway/Features'
import { Divider, Helmet } from 'src/fragments'
import { NewToServerlessPrefooter } from 'src/fragments'

const EventGateway = ({ location }) => (
  <DefaultLayout prefooter={NewToServerlessPrefooter} transparentHeader>
    <Helmet
      title='Event Gateway'
      description='Event Gateway is an event router designed for event-driven, serverless architectures. It makes it easy to wire functions to http endpoints, react to business events with serverless functions, and to share event subscriptions with others.'
      location={location}
    />
    <Hero />
    <UseCase />
    <Divider />
    <Features />
  </DefaultLayout>
)

export default EventGateway
