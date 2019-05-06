import React from 'react'
import Tweet from './Tweet'
import { Row } from 'serverless-design-system'
import allTweets from './TwitterData'

const Tweets = () => (
  <Row justifyContent='space-between'>
    <Tweet {...allTweets[0]} />
    <Row>
      <Tweet {...allTweets[2]} />
      <Tweet {...allTweets[3]} />
    </Row>
  </Row>
)

export default Tweets
