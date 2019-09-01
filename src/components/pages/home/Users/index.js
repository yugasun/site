import React from 'react'
import { Box, Row } from 'serverless-design-system'
import imgTwitter from 'src/assets/images/home/tweeters/twitter-icon.svg'
import imgTweeterOne from 'src/assets/images/home/tweeters/papa.png'
import imgTweeterTwo from 'src/assets/images/home/tweeters/david.png'
import imgTweeterThree from 'src/assets/images/home/tweeters/jason.png'
import imgTweeterFour from 'src/assets/images/home/tweeters/tyler.png'
import './Users.css'

export default class Users extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  /**
   * Component Did Mount
   */

  componentDidMount() {}

  /**
   * Render
   */

  render() {
    return (
      <div className='container user-tweets'>
        <div className='container-inner user-tweets-inner'>

          <div className='container header-label'>
            Serverless Architects
          </div>

          <div className='container header'>
            Empowering a new generation of developers.
          </div>

          <div className='container user-tweets-tweets'>
            <div className='user-tweets-tweet'>
              <div className='user-tweets-tweet-icon'>
                <img src={imgTwitter} />
              </div>
              <div className='user-tweets-tweet-name'>
                <img src={imgTweeterTwo} />
                @david_welch
              </div>
              <div className='user-tweets-tweet-text'>
                Built our platform on @goserverless with 2 engineers working nights and mornings for the first 14 months. Didn’t pay a dime until 16 months in, have scaled to 10+ employees w exp from 0 to senior, very agile w CI/CD, couldn’t have made a better choice.
              </div>
            </div>

            <div className='user-tweets-tweet'>
              <div className='user-tweets-tweet-icon'>
                <img src={imgTwitter} />
              </div>
              <div className='user-tweets-tweet-name'>
                <img src={imgTweeterOne} />
                @DrPappa
              </div>
              <div className='user-tweets-tweet-text'>
                I didn't realise #serverless was so absurdly quick and easy to use. Thanks @goserverless you've done an excellent job.
              </div>
            </div>

            <div className='user-tweets-tweet'>
              <div className='user-tweets-tweet-icon'>
                <img src={imgTwitter} />
              </div>
              <div className='user-tweets-tweet-name'>
                <img src={imgTweeterThree} />
                @themccallister
              </div>
              <div className='user-tweets-tweet-text'>
                I’m still a huge fan of @Docker but man this @goserverless stuff is purely amazing, I'm fully onboard with managing infrastructure from code... Just moved an existing API and supporting app to Lambda functions in one day...
              </div>
            </div>

            <div className='user-tweets-tweet'>
              <div className='user-tweets-tweet-icon'>
                <img src={imgTwitter} />
              </div>
              <div className='user-tweets-tweet-name'>
                <img src={imgTweeterFour} />
                @TylerZey
              </div>
              <div className='user-tweets-tweet-text'>
                Built two #Lambda functions today via @goserverless. One runs daily to update all of our coupons in DynamoDB. And the other is the query function to search DynamoDB for the coupon. Super duper easy with Serverless framework. Got it live and almost in prod already.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
