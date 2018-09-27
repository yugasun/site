import React from 'react'

import DefaultLayout from 'src/layouts/Default'
import Hero from 'src/components/pages/resources/events/Hero'
import Introduction from 'src/components/pages/resources/events/Introduction'
import ServerlessUserGroups from 'src/components/pages/resources/events/ServerlessUserGroups'
import UpcomingMeetups from 'src/components/pages/resources/events/UpcomingMeetups'
import Prefooter from 'src/components/pages/resources/events/Prefooter'
import { Helmet } from 'src/fragments'

const ResourcesEvents = ({ location }) => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Helmet title="Serverless Events" location={location} />
    <Hero />
    <Introduction />
    <UpcomingMeetups />
    <ServerlessUserGroups />
  </DefaultLayout>
)

export default ResourcesEvents
