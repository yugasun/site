import React, { Component } from 'react'
// import { Link } from 'react-router'
import Page from '../Page'
import Newsletter from '../../components/Newsletter/Newsletter'
import Terminal from '../../components/TerminalCommands/TerminalCommands'
import ContentBlock from '../../components/ContentBlock/ContentBlock'
import Button from '../../components/Button/Button'
import terminalCommands from './terminalCommands'
import architectureGif from '../../assets/images/architecture.gif'
import yamlGif from '../../assets/images/serverlessyml.gif'
import communityJpg from '../../assets/images/community.jpg'
import Svg from 'react-svg-inline'
import gitHubSvg from '../../assets/icons/iconmonstr-github-1.svg'
import Space from './space'
import styles from './Homepage.css'

export default class Homepage extends Component {
  constructor (props, context) {
    super(props, context)
    this.triggerEasterEgg = this.triggerEasterEgg.bind(this)
    this.space = false
  }
  triggerEasterEgg (e) {
    e.preventDefault()
    if (!this.space) {
      new Space().main()
      this.space = true
    }
  }
  render () {
    /*
    <h2 className={styles.subHeading}>
      Framework
      <span className={styles.ampersand}>
        &
      </span>
      Ecosystem
    </h2>
     */
    return (
      <Page {...this.props} fullWidth>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <canvas className={styles.canvas} id='demo'></canvas>
            <div className={styles.bg}>
              <div className={styles.hero} >
                <div className={styles.heroLeft}>

                  <div className={styles.copy}>
                    <h3 className={styles.tagline}>Build More,</h3>
                    <h3 className={styles.tagline}>Manage Less</h3>
                    <h1 className={styles.heading}>With The Serverless Framework </h1>
                    <Button kind='black' style={{margin: '20px 0px'}}>
                      <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '25px'}}>
                        <Svg svg={gitHubSvg} fill='white' />
                        <div style={{marginLeft: 10, height: '100%'}}>VIEW THE FRAMEWORK</div>
                      </span>
                    </Button>
                  </div>
                  <div className={styles.providers} />
                </div>
                <div className={styles.heroRight} onDoubleClick={this.triggerEasterEgg}>
                  <Terminal commands={terminalCommands} />
                </div>
              </div>
            </div>
            <div className={styles.cta}>
              <Newsletter />
            </div>
          </div>
        </div>
        <ContentBlock color='black' title='The Serverless Architecture' image={architectureGif}>
          <p>Deploy your applications as independent functions, that respond to events, charge you only when they run, and scale automatically.</p>
          <p>Build REST APIs, data pipelines, and devops automation rapidly, without the overhead of server administration.</p>
        </ContentBlock>
        <ContentBlock color='black' title='The Serverless Framework' image={yamlGif}>
          <p>The open-source command line tool and standard syntax to easily build serverless architectures on AWS Lambda, Azure Functions, Google Cloud Functions & more. Startups to Fortune 100 companies are using the Framework to build sophisticated event-driven systems.</p>
          <Button>Join the beta waitlist</Button>
        </ContentBlock>
        <ContentBlock color='black' title='The Serverless Community' image={communityJpg}>
          <p>Over 1,500 people are in our chatroom and on our forum every day discussing the Serverless Framework and serverless architecitures. Come join us!</p>
        </ContentBlock>
        <section className={styles.content}>
          <h3 className={styles.center}>Overview</h3>
          <p>
            The <a href='https://www.github.com/serverless/serverless' target='_blank'>Serverless Framework</a> is an application framework for building web, mobile
            and IoT applications powered by <a href='https://aws.amazon.com/lambda/' target='_blank'>AWS Lambda, </a>
            <a href='https://aws.amazon.com/api-gateway/' target='_blank'>
              AWS API Gateway
            </a> and in the future other Function as a Service providers.
          </p>
          <p>
            A Serverless application can be a single Lambda function that responds to an event, or an entire
            REST API comprised of hundreds of Lambda functions and API Gateway endpoints. By plugging serverless functions into your infrastructure events you can even automate operations of your non function based infrastructure.
          </p>
          <p>
            The Framework itself is completely extensible. Every operation it does is implemented through plugins and you can easily replace or extend every plugin. We want every team to have an easy time to get started with Serverless, but be able to extend it to fulfill all your future needs.
          </p>
          <p>
            Serverless is built daily by a dedicated team backed by some of the most experienced Investors in the development tools space. Serverless also has a wonderful community building our open source tooling where everyone is welcome.  Join our
            <a href='https://gitter.im/serverless/serverless' target='_bank'>Gitter channel</a>,
            where we work on the project transparently, every day.
          </p>
          <p>
            To get started, view our Documentation:
          </p>
          <p className={styles.center}>
            <a href='http://docs.serverless.com' className={styles.btn}>
              View The Documentation
            </a>
            <a href='https://www.github.com/serverless/serverless' className={styles.btn}>
              View on Github
            </a>
          </p>
        </section>

      </Page>
    )
  }
}
