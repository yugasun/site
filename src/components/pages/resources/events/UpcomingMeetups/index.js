import React from 'react'
import { Column, ResponsiveStack } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import { MeetupCard } from 'src/fragments'
import meetupData from './data'
import { Heading } from 'src/fragments/DesignSystem'

const UpcomingMeetups = () => (
  <AppContainer>
    <Column alignItems='center' py={[2, 2, 3, 5]}>
      <Heading.h2 fontSize={[4, 4, 6, 7]}>Upcoming Meetups</Heading.h2>
      <ResponsiveStack flexWrap='wrap' justifyContent='center'>
        {meetupData.map(({ title, schedule, address, attending }) => (
          <MeetupCard
            key={title}
            title={title}
            schedule={schedule}
            address={address}
            attending={attending}
          />
        ))}
      </ResponsiveStack>
    </Column>
  </AppContainer>
)

export default UpcomingMeetups
