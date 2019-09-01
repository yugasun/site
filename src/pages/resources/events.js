import React from 'react'

import DefaultLayout from 'src/layouts/DefaultNewest'
import Hero from 'src/components/pages/resources/events/Hero'
import Introduction from 'src/components/pages/resources/events/Introduction'
import ServerlessUserGroups from 'src/components/pages/resources/events/ServerlessUserGroups'
import UpcomingMeetups from 'src/components/pages/resources/events/UpcomingMeetups'
import { Helmet, NewToServerlessPrefooter } from 'src/fragments'

const ResourcesEvents = ({ location }) => (
  <DefaultLayout prefooter={NewToServerlessPrefooter} transparentHeader>
    <Helmet title='Serverless Meetups' location={location} />
    <Hero />
    <Introduction />
    <UpcomingMeetups />
    <ServerlessUserGroups />
  </DefaultLayout>
)

export default ResourcesEvents
