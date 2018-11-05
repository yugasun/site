import React from 'react'
import {
  Column,
  ResponsiveStack,
} from 'serverless-design-system'
import { AppContainer } from 'src/components'
import { MeetupCard, TitleWithIcon } from 'src/fragments'
import meetupData from './data'

const UpcomingMeetups = () => (
  <AppContainer>
    <Column alignItems='center' py={[2, 2, 3, 5]}>
      <TitleWithIcon fontSize={[4, 4, 6, 7]}>
        Upcoming Events
      </TitleWithIcon>
      <ResponsiveStack
        flexWrap='wrap'
        justifyContent='center'
      >
        {
          meetupData.map(({ title, schedule, address, attending}) => (
            <MeetupCard
              key={title}
              title={title}
              schedule={schedule}
              address={address}
              attending={attending}
            />
          ))
        }
      </ResponsiveStack>
    </Column>
  </AppContainer>
)

export default UpcomingMeetups