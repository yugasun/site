import React from 'react'
import {
  ResponsiveStack,
  Column,
  Box,
  Row,
  Background,
  Absolute,
} from 'serverless-design-system'
import { AppContainerNewest as AppContainer } from 'src/components'
import { TitleWithIconNewest as TitleWithIcon } from 'src/fragments'
import { Heading, P } from 'src/fragments/DesignSystem'
import Tweet from './Tweet'
import Tweets from './Tweets'
import TweetsData from './TwitterData'
import communityNumbers from './CommunityNumbers'

const HomeCommunity = () => (
  <React.Fragment>
    <AppContainer>
      <Row mt={[0, 0, 132, 372, 164]} mb={[62, 62, 62, 62, 0]}>
        <Column width={[1, 1, 1, 1]} mt={[242, 242, 286, 286, 0]}>
          <Box width={[0.8, 0.8, 0.8, 1, 0.5]}>
            <TitleWithIcon color='black'>
              Backed by a rich and vibrant community
            </TitleWithIcon>
          </Box>
          <Row
            mt={42}
            flexWrap={['wrap', 'wrap', 'initial']}
            justifyContent={[
              'space-around',
              'space-around',
              'space-between',
              'space-between',
              'none',
            ]}
          >
            {communityNumbers.map((item, index) => (
              <Column
                key={index}
                mr={[0, 0, 0, 0, 64]}
                mt={index > 1 ? [3, 3, 0] : [0]}
                width={[0.5, 0.5, 'auto']}
              >
                <Heading.h2
                  pb={0}
                  my={0}
                  align='center'
                  ml={index == 1 ? [-2, -2, 0] : [0]}
                >
                  {item.number}
                </Heading.h2>
                <Box width={index == 1 ? [0.9, 0.9, 1] : [1]}>
                  <P color='#8c8c8c' m={0} align='center'>
                    {item.title}
                  </P>
                </Box>
              </Column>
            ))}
          </Row>
        </Column>

        <Box display={['none', 'none', 'none', 'none', 'block']}>
          <Tweet {...TweetsData[1]} />
        </Box>
      </Row>
    </AppContainer>
    <Tweets />
  </React.Fragment>
)

export default HomeCommunity
