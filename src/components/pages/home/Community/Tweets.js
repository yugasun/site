import React from 'react'
import Tweet from './Tweet'
import { Row } from 'serverless-design-system'
import allTweets from './TwitterData'

const Tweets = () => (
  <Row>
    {allTweets.map((tweet, index) => (
      <Tweet {...tweet} key={index} />
    ))}
  </Row>
)

export default Tweets
