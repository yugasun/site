import React from 'react'
import { Box, Row } from 'serverless-design-system'
import Tweet from './Tweet'
import Tweets from './Tweets'
import TweetsData from './TwitterData'
import CommunityNumbers from './CommunityNumbers'

const HomeCommunity = () => (
  <React.Fragment>
    <Box display={['block', 'block', 'none', 'none', 'block']}>
      <Row mt={[0, 0, 132, 372, 164]} mb={[62, 62, 62, 62, 0]}>
        <CommunityNumbers />
        <Box display={['none', 'none', 'none', 'none', 'block']}>
          <Tweet {...TweetsData[1]} />
        </Box>
      </Row>
    </Box>
    <Box
      display={['none', 'none', 'block', 'block', 'none']}
      pt={[0, 0, 132, 372, 164]}
      pb={[62, 62, 62, 62, 0]}
    >
      <CommunityNumbers />
    </Box>
    <Tweets />
  </React.Fragment>
)

export default HomeCommunity
