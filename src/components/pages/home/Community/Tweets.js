import React from 'react'
import Tweet from './Tweet'
import { Row, Flex, Box } from 'serverless-design-system'
import allTweets from './TwitterData'
import Slider from 'react-slick'
require('slick-carousel/slick/slick.css')
require('slick-carousel/slick/slick-theme.css')
require('./MobileCarousel.css')
import styled from 'styled-components'

const settings = {
  dots: true,
}

const FlexWithSmalliPadFix = styled(Flex)`
  @media screen and (min-width: 768px) and (max-width: 790px) {
    align-items: normal;
  }
`

const Tweets = () => (
  <React.Fragment>
    <Box display={['block', 'block', 'none']}>
      <Slider {...settings}>
        <Tweet {...allTweets[0]} />
        <Tweet {...allTweets[2]} />
        <Tweet {...allTweets[1]} />
        <Tweet {...allTweets[3]} />
      </Slider>
    </Box>

    <Box display={['none', 'none', 'block', 'block', 'none']}>
      <FlexWithSmalliPadFix
        flexDirection='column'
        alignItems={['normal', 'normal', 'center', 'center', 'normal']}
      >
        <Row>
          <Tweet {...allTweets[2]} />
          <Tweet {...allTweets[1]} />
        </Row>
        <Row>
          <Tweet {...allTweets[0]} />
          <Tweet {...allTweets[3]} />
        </Row>
      </FlexWithSmalliPadFix>
    </Box>

    <Box display={['none', 'none', 'none', 'none', 'block']}>
      <Flex justifyContent='space-between'>
        <Tweet {...allTweets[0]} />
        <Tweet {...allTweets[1]} />
        <Tweet {...allTweets[2]} />
        <Tweet {...allTweets[3]} />
      </Flex>
    </Box>
  </React.Fragment>
)

export default Tweets
