import React from 'react'
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
    this.state.stats.stars = 32515
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
    console.log(chapter)
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
            The complete solution for building & operating serverless
            applications
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
                Intro
              </div>
              <div
                className={`hero-video-chapter ${
                  this.state.chapter === 'develop' ? 'active' : ''
                }`}
                onClick={() => {
                  this.toggleChapter('develop')
                }}
              >
                Develop
              </div>
              <div
                className={`hero-video-chapter ${
                  this.state.chapter === 'deploy' ? 'active' : ''
                }`}
                onClick={() => {
                  this.toggleChapter('deploy')
                }}
              >
                Deploy
              </div>
              <div
                className={`hero-video-chapter ${
                  this.state.chapter === 'monitor' ? 'active' : ''
                }`}
                onClick={() => {
                  this.toggleChapter('monitor')
                }}
              >
                Monitor
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
                    src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/home/lifecycle_intro_2_4.mp4'
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
                    src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/home/lifecycle_develop_2_3.mp4'
                    type='video/mp4'
                  />
                </video>
              )}

              {this.state.chapter === 'deploy' && (
                <video
                  autoPlay
                  muted
                  onEnded={() => {
                    this.toggleChapter('monitor')
                  }}
                >
                  <source
                    src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/home/lifecycle_deploy_2_2.mp4'
                    type='video/mp4'
                  />
                </video>
              )}

              {this.state.chapter === 'monitor' && (
                <video
                  autoPlay
                  muted
                  onEnded={() => {
                    this.toggleChapter('intro')
                  }}
                >
                  <source
                    src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/home/lifecycle_monitor_2_4.mp4'
                    type='video/mp4'
                  />
                </video>
              )}
            </div>
          </div>

          <div className='hero-actions container'>
            <a
              href='https://dashboard.serverless.com'
              className='hero-button hero-button-primary'
            >
              Start Free
            </a>
            <div className='hero-button hero-button-secondary'
            onClick={() => {
              var elmnt = document.getElementById('homeEditions')
              elmnt.scrollIntoView({ behavior: 'smooth' })
            }}>
              Learn More
            </div>
          </div>

          <div className='hero-info container'>
            <div className='hero-customers'>
              <div className='hero-customers-meta'>Trusted by</div>
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
                <div className='hero-stat-category'>Downloads</div>
              </div>
              <div className='hero-stat'>
                <div className='hero-stat-number'>
                  {this.state.stats.deployments
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </div>
                <div className='hero-stat-category'>Weekly Deployments</div>
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
                <div className='hero-stat-category'>Plugins</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
