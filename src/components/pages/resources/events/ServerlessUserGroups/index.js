import React from 'react'
import { Background, Box } from 'serverless-design-system'

import { AppContainer } from 'src/components'
import dotsBackground from 'src/assets/images/dots-background.png'
import { Heading } from 'src/fragments/DesignSystem'
import ServerlessUserGroupStack from './ServerlessUserGroupStack'

const items = [
  {
    title: 'Serverless',
    location: 'San Francisco, CA',
    link: 'https://meetup.com/Serverless',
  },
  {
    title: 'Triangle Serverless',
    location: 'Raleigh, NC',
    link: 'https://meetup.com/TriangleServerless',
  },
  {
    title: 'Serverless New York City',
    location: 'New York City, NY',
    link: 'https://meetup.com/New-York-City-Serverless-Architecture-Meetup',
  },
  {
    title: 'Serverless Toronto',
    location: 'Toronto, ON',
    link: 'https://meetup.com/Serverless-Toronto',
  },
  {
    title: 'Serverless - Metro Detroit',
    location: 'Detroit, MI',
    link: 'https://meetup.com/Serverless-Detroit',
  },
  {
    title: 'Serverless Atlanta',
    location: 'Atlanta, GA',
    link: 'https://meetup.com/Serverless-Atlanta',
  },
  {
    title: 'Serverless MN',
    location: 'Minneapolis/St Paul',
    link: 'https://meetup.com/Serverless-MN',
  },
  {
    title: 'Serverless LA',
    location: 'Los Angeles, CA',
    link: 'https://meetup.com/Serverless-LA',
  },
  {
    title: 'Serverless Sacramento',
    location: 'Sacramento, CA',
    link: 'https://meetup.com/Sacramento-Serverless-Meetup',
  },
  {
    title: 'Serverless Miami',
    location: 'Miami, FL',
    link: 'https://www.meetup.com/Serverless-Miami/',
  },
  {
    title: 'Serverless Vancouver',
    location: 'Vancouver, BC',
    link: 'https://meetup.com/Serverless-Vancouver',
  },
  {
    title: 'Serverless Cork',
    location: 'Sao Paulo, Brazil',
    link: 'https://www.meetup.com/meetup-group-ynxOSSBL/',
  },
  {
    title: 'Serverless Cork',
    location: 'Cork, Ireland',
    link: 'https://meetup.com/Serverless-Cork',
  },
  {
    title: 'Serverless London',
    location: 'London, United Kingdom',
    link: 'https://meetup.com/Serverless-London',
  },
  {
    title: 'Serverless Berlin',
    location: 'Berlin, Germany',
    link: 'https://meetup.com/Serverless-Berlin',
  },
  {
    title: 'Serverless Italy',
    location: 'Milano, MI',
    link: 'https://meetup.com/Serverless-Italy',
  },
  {
    title: 'Serverless Ukraine',
    location: 'Lviv, Ukraine',
    link: 'https://www.meetup.com/Serverless-Lviv/',
  },
  {
    title: 'Serverless User Group Poland',
    location: 'Warsaw, Poland',
    link: 'https://meetup.com/ServerlessUGPL',
  },
  {
    title: 'Serverless Moscow',
    location: 'Moscow, Russia',
    link: 'https://meetup.com/moscow-serverless',
  },
  {
    title: 'Serverless Turkey',
    location: 'Istanbul, Turkey',
    link: 'https://meetup.com/Serverless-Turkey',
  },
  {
    title: 'Serverless (Function As a Service) - Pune',
    location: 'Pune, Mumbai, India',
    link: 'https://meetup.com/Serverless-Pune',
  },
  {
    title: 'Serverless Sri Lanka',
    location: 'Colombo, Sri Lanka',
    link: 'https://meetup.com/Serverless-Sri-Lanka',
  },
]

const ServerlessUserGroups = () => (
  <Background
    background={`url(${dotsBackground})`}
    backgroundSize='cover'
    height={['1800px', '1800px', '2000px', '1450px', '1450px', '1400px']}
  >
    <AppContainer>
      <Box pb={[300, 300, 13]}>
        <Heading.h3 pt={5} pb={2} align='center'>
          Serverless User Groups
        </Heading.h3>
        <ServerlessUserGroupStack items={items} />
      </Box>
    </AppContainer>
  </Background>
)

export default ServerlessUserGroups
