import React from 'react'
import { Box, Row } from 'serverless-design-system'
import Tweets from './Tweets'
import CommunityNumbers from './CommunityNumbers'

const HomeCommunity = () => (
  <React.Fragment>
    <Box display={['block', 'block', 'none', 'none', 'block']}>
      <Row mt={[92, 92, 132, 372, 132]} mb={[62, 62, 62, 62, 0]}>
        <CommunityNumbers />
      </Row>
    </Box>
    <Box
      display={['none', 'none', 'block', 'block', 'none']}
      pt={[0, 0, 92, 92, 164]}
      pb={[62, 62, 62, 62, 0]}
    >
      <CommunityNumbers />
    </Box>
    <Tweets />
  </React.Fragment>
)

export default HomeCommunity
