import React from 'react'
import {
  ResponsiveStack,
  Column,
  Box,
  Row,
  Background,
} from 'serverless-design-system'
import { AppContainerNewest as AppContainer } from 'src/components'
import { TitleWithIconNew as TitleWithIcon } from 'src/fragments'
import { Heading, P } from 'src/fragments/DesignSystem'
import Tweet from './Tweet'
import Tweets from './Tweets'
import TweetsData from './TwitterData'

const communityNumbers = [
  {
    title: 'Weekly deployments',
    number: '5,000,000',
  },
  {
    title: 'Downloads',
    number: '8,000,000',
  },
  {
    title: 'Plugins',
    number: '1,230',
  },
  {
    title: 'GitHub stars',
    number: '5,000,000',
  },
]

const HomeCommunity = ({ usingSafariDesktop }) => (
  <React.Fragment>
    <Row mt={[0, 0, 132, 132, 164]}>
      <AppContainer>
        <ResponsiveStack
          flexDirection={['column-reverse', 'column-reverse', 'row']}
        >
          <Column width={[1, 1, 1 / 2, 1]}>
            <Box width={[0.5]}>
              <TitleWithIcon headingComponent={Heading.h4} color='black'>
                Backed by a rich and vibrant community
              </TitleWithIcon>
            </Box>
            <Row mt={42}>
              {communityNumbers.map((item, index) => (
                <Column key={index} mr={32}>
                  <Heading.h2 pb={0} my={0}>
                    {item.number}
                  </Heading.h2>
                  <P color='#8c8c8c' m={0} align='center'>
                    {item.title}
                  </P>
                </Column>
              ))}
            </Row>
          </Column>
        </ResponsiveStack>
      </AppContainer>
      <Tweet {...TweetsData[1]} />
    </Row>
    <Tweets />
  </React.Fragment>
)

export default HomeCommunity
