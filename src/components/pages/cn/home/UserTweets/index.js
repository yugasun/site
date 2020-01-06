import React from 'react'
import imgTwitter from 'src/assets/images/home/tweeters/twitter-icon.svg'
import imgWeibo from 'src/assets/images/home/tweeters/weibo.svg'
import imgZhihu from 'src/assets/images/home/tweeters/zhihu.svg'
import imgTweeterOne from 'src/assets/images/home/tweeters/liuyu.jpg'
import imgTweeterTwo from 'src/assets/images/home/tweeters/papa.png'
import imgTweeterThree from 'src/assets/images/home/tweeters/jenz.jpg'
import imgTweeterFour from 'src/assets/images/home/tweeters/david.png'
import './UserTweets.css'
import { learn } from 'src/constants/urls'
import { InternalLink } from 'src/fragments'

export default class UserTweets extends React.Component {
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
      <div className='container user-tweets-component'>
        <div className='container-inner user-tweets-inner'>
          <div className='container header-label'>Serverless 架构师</div>

          <div className='container header'>
            关于 Serverless 开发人员
          </div>

          <div className='container user-tweets-tweets'>
            <div className='user-tweets-tweet'>
              <div className='user-tweets-tweet-icon'>
                <img src={imgZhihu} />
              </div>
              <div className='user-tweets-tweet-name'>
                <img src={imgTweeterOne} />
                @刘宇
              </div>
              <div className='user-tweets-tweet-text'>
              Serverless 架构是必然，从物理机到云主机，到 Serverless 架构，去服务器化是越来越明显，上云也是必然，只是什么时候上的问题，早上早踩坑，同样也是早享受。所以，可以的话，还希望可以尽快上云，逐步迁移，迁移上云是不可回避的问题。
              </div>
            </div>

            <div className='user-tweets-tweet'>
              <div className='user-tweets-tweet-icon'>
                <img src={imgTwitter} />
              </div>
              <div className='user-tweets-tweet-name'>
                <img src={imgTweeterTwo} />
                @DrPappa
              </div>
              <div className='user-tweets-tweet-text'>
                I didn't realise #serverless was so absurdly quick and easy to
                use. Thanks @goserverless you've done an excellent job.
              </div>
            </div>

            <div className='user-tweets-tweet'>
              <div className='user-tweets-tweet-icon'>
                <img src={imgWeibo} />
              </div>
              <div className='user-tweets-tweet-name'>
                <img src={imgTweeterThree} />
                @Jens俊杰
              </div>
              <div className='user-tweets-tweet-text'>
              Serverless 下不需要在架构和技术栈花费过多精力，Runtime 和语言也没有强制依赖，而是完全面向业务，每个前端工程师都可以是全栈的。
              </div>
            </div>

            <div className='user-tweets-tweet'>
              <div className='user-tweets-tweet-icon'>
                <img src={imgTwitter} />
              </div>
              <div className='user-tweets-tweet-name'>
                <img src={imgTweeterFour} />
                @david_welch
              </div>
              <div className='user-tweets-tweet-text'>
                Built our platform on @goserverless with 2 engineers working
                nights and mornings for the first 14 months. Didn’t pay a dime
                until 16 months in, have scaled to 10+ employees w exp from 0 to
                senior, very agile w CI/CD, couldn’t have made a better choice.
              </div>
            </div>
          </div>
          {/** TODO: className naming hacky - streamline and fix */}
          <div className='user-tweets-actions container'>
            <span>
            Serverless 架构师是一个新兴并快速发展的角色</span>
            <span >&nbsp;-{' '}</span>
            <InternalLink to={learn}>
              <span>了解如何构建 Serverless 应用</span>
            </InternalLink>
          </div>
        </div>
      </div>
    )
  }
}
