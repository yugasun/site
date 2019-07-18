import React from 'react'

import {
  Background,
  Column,
  P,
  Box
} from 'serverless-design-system'

import { AppContainer } from 'src/components'
import ServerlessUserGroupStack from '../ServerlessUserGroupStack'
import dotsBackground from 'src/assets/images/dots-background.png'
import { Heading } from 'src/fragments/DesignSystem'

const newsList = [
  { title: 'The Promise or Peril of the New Cloud Technology', location: `Barron's Magazine` },
  { title: `Billing by Millionths of Pennies, Cloud Computing's Giants Take in Billions`, location: 'New York Times' },
  { title: 'Serverless raises $3M to help developers go serverless', location: 'Techcrunch' },
]

const NewsCard = ({ news: { title, publisher } }) => (
  <Box
    width={[1, 4/10, 3/10]}
    boxShadow='2px 2px 8px 0 #eaeaea'
    p={2}
    m={2}
    minWidth={[7/10, '300px']}
  >
    <Heading.h3 fontFamily='SoleilBk' fontSize={4}>{title}</Heading.h3>
    <P fontSize={0}>{publisher}</P>
  </Box>
)

const OurTeam= () => (
  
    <Background
      background={`url(${dotsBackground})`}
      backgroundSize='cover'
    >
    <AppContainer>
      <Column py={5} mt={[50, 50, 100, 163]}>
        <Heading.h3 align='center' mt={[0, 0, 0, '11px']}>
          Serverless In The News
        </Heading.h3>
        <ServerlessUserGroupStack items={newsList} />
      </Column>
      </AppContainer>
    </Background>
  
)

export default OurTeam