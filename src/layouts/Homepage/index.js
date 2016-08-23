import React, { Component } from 'react'
// import { Link } from 'react-router'
import Page from '../Page'
import Newsletter from '../../components/Newsletter/Newsletter'
import Terminal from '../../components/TerminalCommands/TerminalCommands'
import ContentBlock from '../../components/ContentBlock/ContentBlock'
import Modal from '../../components/Modal/Modal'
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
  static contextTypes = {
    auth: React.PropTypes.object.isRequired,
  };
  constructor (props, context) {
    super(props, context)
    this.triggerEasterEgg = this.triggerEasterEgg.bind(this)
    const auth = this.context.auth
    const loggedIn = auth.loggedIn()
    this.state = {
      active: false,
      showModal: false,
      isLoggedIn: loggedIn,
    }
    this.space = false
    this.login = auth.login.bind(this)
    this.logout = auth.logout.bind(this)
    this.handleOnLogin = this.handleOnLogin.bind(this)
  }
  componentDidMount () {
    const auth = this.context.auth
    const loggedIn = auth.loggedIn()
    console.log('componentDidMount loggedIn', loggedIn)
    // in mulesoft application XYZ
    window.addEventListener('serverlessLogin', this.handleOnLogin, false)
  }
  componentDidUpdate () {
    const auth = this.context.auth
    const loggedIn = auth.loggedIn()
    console.log('componentDidUpdate loggedIn', loggedIn)
  }
  handleToggle = () => {
    this.setState({showModal: !this.state.showModal})
  }
  triggerEasterEgg (e) {
    e.preventDefault()
    if (!this.space) {
      new Space().main()
      this.space = true
    }
  }
  handleOnLogin (e) {
    console.log(e)
    console.log(e.detail) // org ID
    this.setState({
      showModal: true
    })
  }
  renderBetaButton () {
    const { isLoggedIn } = this.state
    if (isLoggedIn) {
      return (
        <p style={{color: '#fff'}}>'You got it dude!'</p>
      )
    } else {
      return (
        <Button onClick={this.login}>
          Join the beta waitlist
        </Button>
      )
    }
  }
  render () {
    console.log('homepage', this.context.auth)
    const auth = this.context.auth
    const loggedIn = auth.loggedIn()
    console.log('render', loggedIn)
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
                    <Button
                      kind='black'
                      style={{margin: '20px 0px'}}
                      href='https://github.com/serverless/serverless'
                    >
                      <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '25px'}}>
                        <Svg svg={gitHubSvg} fill='white' />
                        <div style={{marginLeft: 10, height: '100%'}}>
                          VIEW THE OPEN SOURCE FRAMEWORK
                        </div>
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
              <h2 className={styles.ctaCopy}>
                Get early access to our platform
              </h2>
              {this.renderBetaButton()}
            </div>
          </div>
        </div>
        <ContentBlock color='black' title='The Serverless Architecture' image={architectureGif}>
          <p>Deploy your applications as independent functions, that respond to events, charge you only when they run, and scale automatically.</p>
          <p>Build REST APIs, data pipelines, and devops automation rapidly, without the overhead of server administration.</p>
        </ContentBlock>
        <ContentBlock color='black' title='The Serverless Framework' image={yamlGif}>
          <p>The open-source command line tool and standard syntax to easily build serverless architectures on AWS Lambda, Azure Functions, Google Cloud Functions & more. Startups to Fortune 100 companies are using the Framework to build sophisticated event-driven systems.</p>
          <Button onClick={this.handleToggle}>Join the beta waitlist</Button>
        </ContentBlock>

        <ContentBlock color='black' title='The Serverless Community' image={communityJpg}>
          <p>Over 1,500 people are in our chatroom and on our forum every day discussing the Serverless Framework and serverless architecitures. Come join us!</p>
        </ContentBlock>

        <div className={styles.newsletter}>
          <Newsletter />
        </div>
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
        <Modal
          active={this.state.showModal}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title='Dope sauce'
        >
          <p>Thanks you are in the beta!</p>
        </Modal>
      </Page>
    )
  }
}
