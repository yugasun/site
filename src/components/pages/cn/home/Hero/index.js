import React from 'react'
import { ExternalLink, InternalLink } from 'src/fragments'
import { Button } from 'src/components'
import { gettingStarted, docs } from 'src/constants/urls.cn'

import imgBolt from 'src/assets/images/icon-bolt.svg'
import imgLogoEa from 'src/assets/images/logo-ea.svg'
import imgLogoNordstrom from 'src/assets/images/logo-nordstrom.png'
import imgLogoCocaCola from 'src/assets/images/logo-coca-cola.png'
import imgLogoExpedia from 'src/assets/images/logo-expedia.png'
import imgLogoReuters from 'src/assets/images/logo-reuters.png'
import './Hero.css'

export default class Hero extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.state.chapter = null

    this.state.stats = {}
    this.state.stats.downloads = 15796866
    this.state.stats.deployments = 758719
    this.state.stats.stars = 33437
    this.state.stats.plugins = 215

    this.state.timers = {}

    this.toggleChapter = this.toggleChapter.bind(this)
  }

  /**
   * Component Did Mount
   */

  componentDidMount() {
    const self = this

    // Start stats timer
    this.state.timers.stats = setInterval(() => {
      const newState = Object.assign(self.state, {
        stats: {
          downloads: self.state.stats.downloads + 33,
          deployments: self.state.stats.deployments + 13,
          stars: self.state.stats.stars,
          plugins: self.state.stats.plugins,
        },
      })
      self.setState(newState)
    }, 3000)

    // Start Fade In Timer of video
    setTimeout(() => {
      const containter = document.getElementById('hero-video-container')
      self.setState({ chapter: 'intro' })
    }, 700)

    // Learn More Scroller
    this.heroSection = React.createRef()
  }

  /**
   * Toggle Chapter
   */

  toggleChapter(chapter) {
    this.setState({ chapter })
  }

  /**
   * Render
   */

  render() {
    return (
      <div className='hero-component container' ref={this.heroSection}>
        <div className='hero-inner container-inner'>
          <div className='hero-logo container'>
            <div className='hero-logo-bolt'>
              <img src={imgBolt} />
            </div>
            <div className='hero-logo-serverless'>serverless</div>
            <div className='hero-logo-framework'>framework</div>
          </div>

          <div className='hero-tagline container'>
            立即使用Serverless，只需三步 !
          </div>

          <div className='hero-video-container container'>
            <div className='hero-video-chapters container'>
              <div
                className={`hero-video-chapter ${
                  this.state.chapter === 'intro' ? 'active' : ''
                }`}
                onClick={() => {
                  this.toggleChapter('intro')
                }}
              >
                介绍
              </div>
              <div
                className={`hero-video-chapter ${
                  this.state.chapter === 'develop' ? 'active' : ''
                }`}
                onClick={() => {
                  this.toggleChapter('develop')
                }}
              >
                开发
              </div>
              <div
                className={`hero-video-chapter ${
                  this.state.chapter === 'deploy' ? 'active' : ''
                }`}
                onClick={() => {
                  this.toggleChapter('deploy')
                }}
              >
                部署
              </div>
            </div>

            <div className='hero-video-content'>
              {this.state.chapter === 'intro' && (
                <video
                  autoPlay
                  muted
                  onEnded={() => {
                    this.toggleChapter('develop')
                  }}
                >
                  <source
                    src='https://serverless-cn-1253970226.cos.ap-guangzhou.myqcloud.com/index/01.mp4'
                    type='video/mp4'
                  />
                </video>
              )}

              {this.state.chapter === 'develop' && (
                <video
                  autoPlay
                  muted
                  onEnded={() => {
                    this.toggleChapter('deploy')
                  }}
                >
                  <source
                    src='https://serverless-cn-1253970226.cos.ap-guangzhou.myqcloud.com/index/02.mp4'
                    type='video/mp4'
                  />
                </video>
              )}

              {this.state.chapter === 'deploy' && (
                <video
                  autoPlay
                  muted
                  onEnded={() => {
                    this.toggleChapter('intro')
                  }}
                >
                  <source
                    src='https://serverless-cn-1253970226.cos.ap-guangzhou.myqcloud.com/index/03.mp4'
                    type='video/mp4'
                  />
                </video>
              )}
            </div>
          </div>

          <div className='hero-actions container'>
            <InternalLink
              to={gettingStarted}
              className='hero-button hero-button-primary'
            >
              快速开始
            </InternalLink>
            <InternalLink
              className='hero-button hero-button-secondary'
              to={docs}
            >
              更多内容
            </InternalLink>
          </div>

          <div className='hero-info container'>
            <div className='hero-customers'>
              <div className='hero-customers-meta'>他们在用</div>
              <div className='hero-customers-list'>
                <div className='hero-customer'>
                  <img src={imgLogoEa} draggable={false} />
                </div>
                <div className='hero-customer'>
                  <img src={imgLogoNordstrom} draggable={false} />
                </div>
                <div className='hero-customer'>
                  <img src={imgLogoCocaCola} draggable={false} />
                </div>
                <div className='hero-customer'>
                  <img src={imgLogoExpedia} draggable={false} />
                </div>
                <div className='hero-customer'>
                  <img src={imgLogoReuters} draggable={false} />
                </div>
              </div>
            </div>

            <div className='hero-stats'>
              <div className='hero-stat'>
                <div className='hero-stat-number'>
                  {this.state.stats.downloads
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </div>
                <div className='hero-stat-category'>下载量</div>
              </div>
              <div className='hero-stat'>
                <div className='hero-stat-number'>
                  {this.state.stats.deployments
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </div>
                <div className='hero-stat-category'>周部署次数</div>
              </div>
              <div className='hero-stat'>
                <div className='hero-stat-number'>
                  {this.state.stats.stars
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </div>
                <div className='hero-stat-category'>Github Stars</div>
              </div>
              <div className='hero-stat'>
                <div className='hero-stat-number'>
                  {this.state.stats.plugins}
                </div>
                <div className='hero-stat-category'>插件</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
