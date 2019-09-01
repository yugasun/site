import React from 'react'
import { Box, Row } from 'serverless-design-system'
import imgBolt from 'src/assets/images/icon-bolt.svg'
import imgLogoEa from 'src/assets/images/logo-ea.png'
import imgLogoNordstrom from 'src/assets/images/logo-nordstrom.png'
import imgLogoCocaCola from 'src/assets/images/logo-coca-cola.png'
import imgLogoExpedia from 'src/assets/images/logo-expedia.png'
import imgLogoReuters from 'src/assets/images/logo-reuters.png'
import './Hero.css'

export default class Hero extends React.Component {

  constructor(props) {
    super(props)

    this.state = {}

    this.state.chapter = 'develop'

    this.state.stats = {}
    this.state.stats.downloads = 11898291
    this.state.stats.deployments = 534134
    this.state.stats.stars = 31271
    this.state.stats.plugins = 302

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
      }})
      self.setState(newState)
    }, 3000)

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
      <div className='container hero'>
        <div className='container-inner hero-inner'>

          <div className='logo container'>
            <div className='logo-bolt'>
              <img src={imgBolt} />
            </div>
            <div className='logo-serverless'>
              serverless
            </div>
            <div className='logo-framework'>
              framework
            </div>
          </div>

          <div className='tagline container'>
            The complete solution for building & operating serverless applications
          </div>

          <div className='video-container container'>
            <div className='video-chapters container'>
              <div
                className={`video-chapter ${ this.state.chapter === 'develop' ? 'active' : '' }`}
                onClick={() => { this.toggleChapter('develop') }}>
                Develop
              </div>
              <div
                className={`video-chapter ${ this.state.chapter === 'deploy' ? 'active' : '' }`}
                onClick={() => { this.toggleChapter('deploy') }}>
                Deploy
              </div>
              <div
                className={`video-chapter ${ this.state.chapter === 'test' ? 'active' : '' }`}
                onClick={() => { this.toggleChapter('test') }}>
                Test
              </div>
              <div
                className={`video-chapter ${ this.state.chapter === 'monitor' ? 'active' : '' }`}
                onClick={() => { this.toggleChapter('monitor') }}>
                Monitor
              </div>
              <div
                className={`video-chapter ${ this.state.chapter === 'secure' ? 'active' : '' }`}
                onClick={() => { this.toggleChapter('secure') }}>
                Secure
              </div>
            </div>
          </div>

          <div className='actions container'>
            <div className='button buttonPrimary'>
              Start Free
            </div>
            <div className='button buttonSecondary'>
              Learn More
            </div>
          </div>

          <div className='info container'>
            <div className='customers'>
            <div className='customers-meta'>
              Trusted by
            </div>
              <div className='customers-list'>
                <div className='customer'>
                  <img src={imgLogoEa} draggable={false} />
                </div>
                <div className='customer'>
                  <img src={imgLogoNordstrom} draggable={false} />
                </div>
                <div className='customer'>
                  <img src={imgLogoCocaCola} draggable={false} />
                </div>
                <div className='customer'>
                  <img src={imgLogoExpedia} draggable={false} />
                </div>
                <div className='customer'>
                  <img src={imgLogoReuters} draggable={false} />
                </div>
              </div>
            </div>

            <div className='stats'>
              <div className='stat'>
                <div className='stat-number'>
                  { this.state.stats.downloads.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
                </div>
                <div className='stat-category'>
                  Downloads
                </div>
              </div>
              <div className='stat'>
                <div className='stat-number'>
                  { this.state.stats.deployments.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
                </div>
                <div className='stat-category'>
                  Weekly Deployments
                </div>
              </div>
              <div className='stat'>
                <div className='stat-number'>
                  { this.state.stats.stars.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
                </div>
                <div className='stat-category'>
                  Github Stars
                </div>
              </div>
              <div className='stat'>
                <div className='stat-number'>
                  { this.state.stats.plugins }
                </div>
                <div className='stat-category'>
                  Plugins
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
