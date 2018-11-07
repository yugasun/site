import React from 'react'
import {
  Column,
  ResponsiveStack,
} from 'serverless-design-system'
import { AppContainer } from 'src/components'
import { MeetupCard, TitleWithIcon } from 'src/fragments'

const meetupData = [
    {
      title: 'Serverless Austin: Google Presents Serverless Computing',
      schedule: {
        date: 'Wednesday, November 7, 2018',
        time: '6:00PM to 9:00PM',
      },
      address: {
        firstLine: 'Google Austin',
        secondLine: '500 W 2nd St, 28th Floor, Austin, TX',
      },
      attending: {
        memberImages: [],
        plusCount: 108,
      }
    },
    {
      title: 'Serverless Nürnberg: Serverless Computing with Azure Functions',
      schedule: {
        date: 'Wednesday, November 14, 2018',
        time: '6:00 PM to 8:00 PM',
      },
      address: {
        firstLine: 'implexis GmbH',
        secondLine: 'Deutschherrnstraße 15-19, Nürnberg',
      },
      attending: {
        memberImages: [],
        plusCount: 7,
      }
    },
    {
      title: 'Serverless Toronto: Serverless Computing with Azure Functions',
      schedule: {
        date: 'Wednesday, November 14, 2018',
        time: '6:00 PM to 8:00 PM',
      },
      address: {
        firstLine: 'implexis GmbH',
        secondLine: 'Deutschherrnstraße 15-19, Nürnberg',
      },
      attending: {
        memberImages: [],
        plusCount:33,
      }
    },
    {
      title: 'Serverless Toronto: Serverless Computing with Azure Functions',
      schedule: {
        date: 'Wednesday, November 14, 2018',
        time: '6:00 PM to 8:00 PM',
      },
      address: {
        firstLine: 'Myplanet (Bank of Upper Canada Building)',
        secondLine: '252 Adelaide St. E., Toronto',
      },
      attending: {
        memberImages: [],
        plusCount:33,
      }
    },
    {
      title: 'Serverless Dubai: November Serverless in the Wild',
      schedule: {
        date: 'Wednesday, November 21, 2018',
        time: '7:00 PM to 9:00 PM',
      },
      address: {
        firstLine: 'Canadian University Dubai',
        secondLine: 'al badaa street skeikh Zayed Road, Dubai',
      },
      attending: {
        memberImages: [],
        plusCount:4,
      }
    },
    {
      title: 'Serverless London: Serverless December!',
      schedule: {
        date: 'Wednesday, December 5, 2018',
        time: '6:30 PM to 9:00 PM',
      },
      address: {
        firstLine: '1 Principal Place',
        secondLine: '115 Worship Street, EC2A 2FA, London',
      },
      attending: {
        memberImages: [],
        plusCount:96,
      }
    },
    {
      title: 'Serverless Toronto: December Meetup',
      schedule: {
        date: 'Thursday, December 13, 2018',
        time: '6:30 PM to 8:30 PM',
      },
      address: {
        firstLine: 'Myplanet (Bank of Upper Canada Building)',
        secondLine: '252 Adelaide St. E., Toronto',
      },
      attending: {
        memberImages: [],
        plusCount:33,
      }
    },
    {
      title: 'Serverless Dubai: November Serverless in the Wild',
      schedule: {
        date: 'Wednesday, December 19, 2018',
        time: '7:00 PM to 9:00 PM',
      },
      address: {
        firstLine: 'Canadian University Dubai',
        secondLine: 'al badaa street skeikh Zayed Road, Dubai',
      },
      attending: {
        memberImages: [],
        plusCount:4,
        }
      },
      {
        title: 'Serverless LA: Serverless at Fender Digital',
        schedule: {
          date: 'Wednesday, January 16, 2019',
          time: '6:00 PM to 8:00 PM',
        },
        address: {
          firstLine: 'Fender Musical Instruments',
          secondLine: '1575 N. Gower Street, Suite #170, Los Angeles, California',
        },
        attending: {
          memberImages: [],
          plusCount:4,
        }
    },
  ]
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
