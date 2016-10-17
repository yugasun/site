import React, { Component } from 'react'
import Page from '../../layouts/Default'
import Terminal from '../../components/Terminal'
import ContentBlock from '../../components/ContentBlock'
import Button from '../../components/Button/Button'
import terminalCommands from './terminalCommands'
import architectureGif from '../../assets/images/architecture.gif'
import frameworkGif from '../../assets/images/framework.gif'
import awsLogo from '../../assets/images/aws_logo.png'
import communityJpg from '../../assets/images/community.png'
import customerCoke from '../../assets/images/customer_coke.png'
import sparkle from '../../assets/images/home_sparkle.png'
import { Link } from 'react-router'
import styles from './Homepage.css'
import playSvg from '../../assets/icons/play.svg'
import docsSvg from '../../assets/icons/book2.svg'
import { addAnimationEvent, removeAnimationEvent } from '../../utils/animations'
import Svg from 'react-svg-inline'

export default class Homepage extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      show: true
    }
    this.animationCallback = this.animationCallback.bind(this)
  }
  componentDidMount () {
    addAnimationEvent(this.refs.animDiv, 'AnimationEnd', this.animationCallback)
  }
  componentWillUnmount () {
    removeAnimationEvent(this.refs.animDiv, 'AnimationEnd', this.animationCallback)
  }
  animationCallback (event) {
    const node = this.refs.sparkle
    setTimeout(function () {
      node.style.display = 'block'
    }, 100)
  }
  render () {
    return (
      <Page {...this.props} fullWidth>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div className={styles.bg}>
              <div className={styles.hero}>
                <div className={styles.heroLeft + ' fadeIn fadeInShort'}>

                  <div className={styles.heroFramework}></div>

                  <div className={styles.tagline}>
                    Build auto-scaling, pay-per-execution, event-driven apps on AWS Lambda
                  </div>
                  <div className={styles.buttons}>
                    <div className={styles.cta}>
                      <Button
                        kind='black'
                        href='/framework'
                      >
                        <span className={styles.ctaInner}>
                          <Svg svg={playSvg} cleanup />
                          <span className={styles.ctaText}>
                            WATCH THE VIDEO
                          </span>
                        </span>
                      </Button>
                    </div>

                    <div className={styles.cta}>
                      <Button
                        kind='black'
                        href='/framework/docs'
                      >
                        <span className={styles.ctaInner}>
                          <Svg svg={docsSvg} cleanup />
                          <span className={styles.ctaText}>
                            READ THE DOCS
                          </span>
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
                <div ref='animDiv' className={styles.heroRight + ' zoomxIn zoomInxLong'}>
                  <img ref='sparkle' className={styles.sparkle} src={sparkle} role='presentation' />
                  <Terminal commands={terminalCommands} />
                </div>
              </div>
              <div className={styles.poweredBy}>
                <span>Powered by AWS Lambda</span>
                <img className={styles.awsLogo} src={awsLogo} alt='aws Lambda' />
              </div>
            </div>

          </div>

          <div className={styles.testimonials}>
            <div className={styles.testimonial}>
              “The Serverless Framework is a core component of
              The Coca-Cola Company's initiative to reduce
              IT operational costs and deploy services faster.”
            </div>
            <div className={styles.customer}>
              <img src={customerCoke} alt='coca cola logo serverless' />
            </div>
          </div>

          <ContentBlock title='The Serverless Architecture' image={architectureGif}>
            <p>
              Deploy your applications as independent functions, that respond to events, charge you only when they run, and scale automatically.
            </p>
          </ContentBlock>

          <ContentBlock title='The Serverless Framework' image={frameworkGif}>
            <p>The open-source, application framework to easily build serverless architectures on AWS Lambda & more.  Startups and Fortune 500 companies are using it to build incredibly efficient applications.</p>
            <p>
              <Link to='/framework'>
                View the framework
              </Link>
            </p>
          </ContentBlock>

          <ContentBlock title='The Serverless Community' image={communityJpg}>
            <p>Over 1,900 people are in our chat room and on our forum every day discussing the Serverless Framework and Serverless Architectures. Join us!</p>
            <p>
              <a href='https://gitter.im/serverless/serverless' target='_blank'>
              Join the Chatroom
              </a>
              <br />
              <a href='http://forum.serverless.com' target='_blank'>
              Check out the Forum
              </a>
            </p>
          </ContentBlock>
        </div>
      </Page>
    )
  }
}
