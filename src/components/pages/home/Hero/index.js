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
      <div className='hero-component container'>
        <div className='hero-inner container-inner'>

          <div className='hero-logo container'>
            <div className='hero-logo-bolt'>
              <img src={imgBolt} />
            </div>
            <div className='hero-logo-serverless'>
              serverless
            </div>
            <div className='hero-logo-framework'>
              framework
            </div>
          </div>

          <div className='hero-tagline container'>
            The complete solution for building & operating serverless applications
          </div>

          <div className='hero-video-container container'>
            <div className='hero-video-chapters container'>
              <div
                className={`hero-video-chapter ${ this.state.chapter === 'develop' ? 'active' : '' }`}
                onClick={() => { this.toggleChapter('develop') }}>
                Develop
              </div>
              <div
                className={`hero-video-chapter ${ this.state.chapter === 'deploy' ? 'active' : '' }`}
                onClick={() => { this.toggleChapter('deploy') }}>
                Deploy
              </div>
              <div
                className={`hero-video-chapter ${ this.state.chapter === 'test' ? 'active' : '' }`}
                onClick={() => { this.toggleChapter('test') }}>
                Test
              </div>
              <div
                className={`hero-video-chapter ${ this.state.chapter === 'monitor' ? 'active' : '' }`}
                onClick={() => { this.toggleChapter('monitor') }}>
                Monitor
              </div>
              <div
                className={`hero-video-chapter ${ this.state.chapter === 'secure' ? 'active' : '' }`}
                onClick={() => { this.toggleChapter('secure') }}>
                Secure
              </div>
            </div>

            <div className='hero-video-content container-inner'>
              <div className='hero-video-content-develop'>
                <div className='hero-video-content-develop-text'>
                  <span>Easily build serverless REST APIs, GraphQL APIs, Data Processors & more.</span>
                </div>
                <div className='hero-video-content-develop-graphic'>
                  <div className='hero-video-content-develop-cli'>
                    <p>name: my-api</p>
                    <p></p>
                    <p>functions:</p>
                    <p style={{ 'marginLeft': '12px' }}>usersList:</p>
                    <p style={{ 'marginLeft': '24px' }}>handler: index.list</p>
                    <p style={{ 'marginLeft': '24px' }}>runtime: nodejs10</p>
                    <p style={{ 'marginLeft': '24px' }}>events:</p>
                    <p style={{ 'marginLeft': '36px' }}>- http:</p>
                    <p style={{ 'marginLeft': '62px' }}>path: /users/list</p>
                    <p style={{ 'marginLeft': '62px' }}>method: get</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className='hero-actions container'>
            <div className='hero-button hero-button-primary'>
              Start Free
            </div>
            <div className='hero-button hero-button-secondary'>
              Learn More
            </div>
          </div>

          <div className='hero-info container'>
            <div className='hero-customers'>
            <div className='hero-customers-meta'>
              Trusted by
            </div>
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
                  { this.state.stats.downloads.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
                </div>
                <div className='hero-stat-category'>
                  Downloads
                </div>
              </div>
              <div className='hero-stat'>
                <div className='hero-stat-number'>
                  { this.state.stats.deployments.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
                </div>
                <div className='hero-stat-category'>
                  Weekly Deployments
                </div>
              </div>
              <div className='hero-stat'>
                <div className='hero-stat-number'>
                  { this.state.stats.stars.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
                </div>
                <div className='hero-stat-category'>
                  Github Stars
                </div>
              </div>
              <div className='hero-stat'>
                <div className='hero-stat-number'>
                  { this.state.stats.plugins }
                </div>
                <div className='hero-stat-category'>
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
