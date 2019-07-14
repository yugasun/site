import React from 'react'
import Tweet from './Tweet'
import { Flex, Box } from 'serverless-design-system'
import allTweets from './TwitterData'
import Slider from 'react-slick'
require('slick-carousel/slick/slick.css')
require('slick-carousel/slick/slick-theme.css')
require('./MobileCarousel.css')
import styled from 'styled-components'

const settings = {
  dots: true,
}

const FlexFlex = styled(Flex)`
  display: flex !important;
`

const FlexWithSmalliPadFix = styled(Flex)`
  @media screen and (min-width: 768px) and (max-width: 790px) {
    align-items: normal;
  }
`
const BoxWithBackground = styled(Box)`
  background-color: #eaeaea;
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
      <Slider {...settings}>
        <FlexFlex>
          <Tweet {...allTweets[2]} />
          <Tweet {...allTweets[1]} />
        </FlexFlex>
        <FlexFlex>
          <Tweet {...allTweets[0]} />
          <Tweet {...allTweets[3]} />
        </FlexFlex>
      </Slider>
    </Box>

    <BoxWithBackground display={['none', 'none', 'none', 'none', 'block']}>
      <Flex justifyContent='space-between'>
        <Tweet {...allTweets[0]} />
        <Tweet {...allTweets[1]} />
        <Tweet {...allTweets[2]} />
        <Tweet {...allTweets[3]} />
      </Flex>
    </BoxWithBackground>
  </React.Fragment>
)

export default Tweets
