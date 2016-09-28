import React, { Component } from 'react'
import Page from '../../layouts/Page'
import Newsletter from '../../fragments/Newsletter/Newsletter'
import UserAuth from '../../components/UserAuth'
import Terminal from '../../components/Terminal'
import ContentBlock from '../../components/ContentBlock'
import Button from '../../components/Button/Button'
import terminalCommands from './terminalCommands'
import architectureGif from '../../assets/images/architecture.gif'
import frameworkGif from '../../assets/images/framework.gif'
import communityJpg from '../../assets/images/community.png'
import styles from './Homepage.css'
// import { Link } from 'react-router'

export default class Homepage extends Component {

  render () {
    const loggedInComponent = (
      <p style={{color: '#fff'}}>You are registered for the beta!</p>
    )
    return (
      <Page {...this.props} fullWidth>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div className={styles.bg}>
              <div className={styles.hero}>
                <div className={styles.heroLeft + ' fadeIn fadeInShort'}>

                  <div className={styles.copy}>
                    <h3 className={styles.tagline}>Build more,</h3>
                    <h3 className={styles.tagline}>manage less</h3>
                    <h1 className={styles.heading}>With the <span style={{fontWeight: '500'}}>Serverless Framework</span></h1>
                    <Button
                      kind='black'
                      style={{margin: '10px 0px 15px 0px'}}
                      href='https://github.com/serverless/serverless'
                      target='_blank'
                    >
                      VIEW THE FRAMEWORK
                    </Button>
                  </div>
                  <div className={styles.providers} />
                </div>
                <div className={styles.heroRight}>
                  <Terminal commands={terminalCommands} />
                </div>
              </div>
            </div>
            <div className={styles.cta}>
              <div className={styles.ctaInner}>
                <div className={styles.ctaRowOne}></div>
                <div className={styles.ctaRowTwo}>
                  <h2 className={styles.ctaCopy}>
                    The Serverless Platform is coming
                  </h2>
                  <UserAuth loggedInComponent={loggedInComponent}>
                    <Button kind='yellow' className={styles.btn} style={{display: 'inline-block', marginTop: 20}} onClick={this.login}>
                      Sign up for early access
                    </Button>
                  </UserAuth>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContentBlock color='black' title='The Serverless Architecture' image={architectureGif}>
          <p>Deploy your applications as independent functions, that respond to events, charge you only when they run, and scale automatically. Build REST APIs, data pipelines, and devops automation rapidly, without the overhead of server administration.</p>
        </ContentBlock>

        <ContentBlock color='black' title='The Serverless Framework' image={frameworkGif}>
          <p>The open-source, command line tool and standard syntax to easily build serverless architectures on AWS Lambda, Azure Functions, Google Cloud Functions & more. Startups to Fortune 100 companies are using the Framework to build sophisticated event-driven systems.</p>
          <a className={styles.yellowLink} href='http://github.com/serverless/serverless' target='_blank'>
            View the framework on Github
          </a>
        </ContentBlock>

        <ContentBlock color='black' title='The Serverless Community' image={communityJpg}>
          <p>Over 1,500 people are in our chatroom and on our forum every day discussing the Serverless Framework and serverless architectures. Come join us!</p>
          <p>
            <a className={styles.yellowLink} href='https://gitter.im/serverless/serverless' target='_blank'>
              Join the Chatroom
            </a>
            <br />
            <a className={styles.yellowLink} href='http://forum.serverless.com' target='_blank'>
              Check out the Forum
            </a>
          </p>
        </ContentBlock>

        <div className={styles.newsletter}>
          <div className={styles.emailContainer}>
            <div className={styles.emailContainerInner}>
              <div className={styles.row}>
                <div className={styles.emailAsk}>
                  <span className='avenir'>
                    We Move Fast. Stay Updated.
                  </span>
                </div>
                <Newsletter />
              </div>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}
