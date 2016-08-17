import React, { Component } from 'react'
// import { Link } from 'react-router'
import Page from '../Page'
import Newsletter from '../../components/Newsletter/Newsletter'
import Terminal from '../../components/TerminalCommands/TerminalCommands'
import ContentBlock from '../../components/ContentBlock/ContentBlock'
import Button from '../../components/Button/Button'
import terminalCommands from './terminalCommands'
import space from './space'
import styles from './Homepage.css'

export default class Homepage extends Component {
  constructor (props, context) {
    super(props, context)
    this.handleDoubleClick = this.handleDoubleClick.bind(this)
  }
  handleDoubleClick (e) {
    e.preventDefault()
    new space().main()
  }
  render () {
    return (
      <Page {...this.props} fullWidth>
        <div className={styles.wrapper}>
          <canvas className={styles.canvas} id='demo'></canvas>
          <div className={styles.hero} >
            <div className={styles.heroLeft}>

              <div className={styles.copy}>
                <h3 className={styles.tagline}>Build More,</h3>
                <h3 className={styles.tagline}>Manage Less</h3>
                <h1 className={styles.heading}>With The Serverless Application </h1>
                <h2 className={styles.subHeading}>
                  Framework
                  <span className={styles.ampersand}>
                    &
                  </span>
                  Ecosystem
                </h2>
              </div>

            </div>
            <div className={styles.heroRight} onDoubleClick={this.handleDoubleClick}>
              <Terminal commands={terminalCommands} />
            </div>
          </div>
          <div className={styles.cta}>
            <Newsletter />
          </div>
        </div>
        <ContentBlock color='black' title='The Serverless Framework'>
           An open-source command line tool that makes it easy to develop and deploy serverless architectures to AWS Lambda, Azure Functions, Google Cloud Functions and more. Hundreds of companies, from small to startups to Fortune 100 enterprises, use the Serverless Framework to move fast, build more, and manage less.
        </ContentBlock>
        <ContentBlock color='black' title='The Serverless Platform'>
          <p>Serverless architectures, or function-as-a-service, are having a major impact on how software is built. AWS Lambda and others are empowering teams to build and ship event-driven applications faster than ever with minimal operational overhead. At Serverless we’re building the next generation of developer tooling for event-driven applications, sign up below to get beta access.</p>
          <Button>Join the beta waitlist</Button>
        </ContentBlock>
        <ContentBlock color='black' title='The Serverless Community'>
          Over 1,000 people are in our chatroom and on our forum everyday discussing the Serverless Framework and serverless architecitures in general. Come and join us!
        </ContentBlock>
        <section className={styles.content}>
          <h3 className={styles.center}>Overview</h3>
          <p>
            The <a href='https://www.github.com/serverless/serverless' target='_blank'>Serverless Framework</a> is an application framework for building web, mobile
            and IoT applications powered by <a href='https://aws.amazon.com/lambda/' target='_blank'>AWS Lambda,</a>
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
