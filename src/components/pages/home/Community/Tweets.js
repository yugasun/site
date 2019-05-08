import React from 'react'
import Tweet from './Tweet'
import { Row, Flex, Box } from 'serverless-design-system'
import allTweets from './TwitterData'
import Slider from 'react-slick'
require('slick-carousel/slick/slick.css')
require('slick-carousel/slick/slick-theme.css')
require('./MobileCarousel.css')

const Tweets = () => (
  <React.Fragment>
    <Box display={['block', 'block', 'none']}>
      <Slider dots={true}>
        <Tweet {...allTweets[0]} />
        <Tweet {...allTweets[2]} />
        <Tweet {...allTweets[1]} />
        <Tweet {...allTweets[3]} />
      </Slider>
    </Box>

    <Box display={['none', 'none', 'block', 'block', 'none']}>
      <Flex
        flexDirection="column"
        alignItems={['normal', 'normal', 'normal', 'center', 'normal']}
      >
        <Row>
          <Tweet {...allTweets[2]} />
          <Tweet {...allTweets[1]} />
        </Row>
        <Row>
          <Tweet {...allTweets[0]} />
          <Tweet {...allTweets[3]} />
        </Row>
      </Flex>
    </Box>

    <Box display={['none', 'none', 'none', 'none', 'block']}>
      <Flex justifyContent="space-between">
        <Tweet {...allTweets[0]} />
        <Row>
          <Tweet {...allTweets[2]} />
          <Tweet {...allTweets[3]} />
        </Row>
      </Flex>
    </Box>
  </React.Fragment>
)

export default Tweets
