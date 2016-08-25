import React, { Component } from 'react'
// import { Link } from 'react-router'
import Page from '../Page'
import Newsletter from '../../components/Newsletter/Newsletter'
import Terminal from '../../components/TerminalCommands/TerminalCommands'
import ContentBlock from '../../components/ContentBlock/ContentBlock'
import Checkbox from '../../components/Checkbox/Check'
import Modal from '../../components/Modal/Modal'
import Button from '../../components/Button/Button'
import terminalCommands from './terminalCommands'
import architectureGif from '../../assets/images/architecture.gif'
import frameworkGif from '../../assets/images/framework.gif'
import communityJpg from '../../assets/images/community.png'
import Svg from 'react-svg-inline'
import gitHubSvg from '../../assets/icons/iconmonstr-github-1.svg'
import Space from './space'
import styles from './Homepage.css'
import AutoForm from 'react-auto-form'
import submitFeatureData from '../../utils/SurveyService'

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
    this.onFeedbackSubmit = this.onFeedbackSubmit.bind(this)
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
    // logins_count < 2
    this.setState({
      showModal: true,
      isLoggedIn: true
    })
  }
  onFeedbackSubmit (event, data) {
    event.preventDefault()
    console.log(event)
    console.log(data)
    const other = data.other
    delete data.other
    const sendData = {
      formData: data,
      other: other,
      userData: localStorage.getItem('profile') // eslint-disable-line
    }
    var that = this
    submitFeatureData(sendData, function (err, data) {
      if (err) {
        console.log('err', err)
        return false
      }
      that.setState({
        showModal: false
      })
    })
  }
  renderBetaButton () {
    const { isLoggedIn } = this.state
    if (isLoggedIn) {
      return (
        <p style={{color: '#fff'}}>You are registered for the beta!</p>
      )
    } else {
      return (
        <Button onClick={this.login}>
          Sign up for early access
        </Button>
      )
    }
  }
  render () {
    console.log('homepage', this.context.auth)
    const auth = this.context.auth
    const loggedIn = auth.loggedIn()
    console.log('render', loggedIn)
    return (
      <Page {...this.props} fullWidth>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <canvas className={styles.canvas} id='demo'></canvas>
            <div className={styles.bg}>
              <div className={styles.hero} >
                <div className={styles.heroLeft}>

                  <div className={styles.copy}>
                    <h3 className={styles.tagline}>Build More</h3>
                    <h3 className={styles.tagline} style={{marginLeft: '30px'}}>Manage Less.</h3>
                    <h1 className={styles.heading}>With The Serverless Framework </h1>
                    <Button
                      kind='black'
                      style={{margin: '20px 0px'}}
                      href='https://github.com/serverless/serverless'
                    >
                      <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '25px'}}>
                        <Svg svg={gitHubSvg} fill='white' />
                        <div style={{marginLeft: 10, height: '100%'}}>
                          VIEW THE FRAMEWORK
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
              <div className={styles.ctaInner}>
                <h2 className={styles.ctaCopy}>
                  The Serverless platform is coming
                </h2>
                {this.renderBetaButton()}
              </div>
            </div>
          </div>
        </div>
        <ContentBlock color='black' title='The Serverless Architecture' image={architectureGif}>
          <p>Deploy your applications as independent functions, that respond to events, charge you only when they run, and scale automatically.</p>
          <p>Build REST APIs, data pipelines, and devops automation rapidly, without the overhead of server administration.</p>
        </ContentBlock>
        <ContentBlock color='black' title='The Serverless Framework' image={frameworkGif}>
          <p>The open-source command line tool and standard syntax to easily build serverless architectures on AWS Lambda, Azure Functions, Google Cloud Functions & more. Startups to Fortune 100 companies are using the Framework to build sophisticated event-driven systems.</p>
          <a className={styles.yellowLink} href='http://github.com/serverless/serverless' target='_blank'>
            View the framework on github
          </a>
        </ContentBlock>

        <ContentBlock color='black' title='The Serverless Community' image={communityJpg}>
          <p>Over 1,500 people are in our chatroom and on our forum every day discussing the Serverless Framework and serverless architecitures. Come join us!</p>
        </ContentBlock>

        <div className={styles.newsletter}>
          <Newsletter />
        </div>

        <Modal
          active={this.state.showModal}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title='Thanks for signing up for the Beta!'
        >
          <h3>Which products are you interested in?</h3>
          <div>
            <AutoForm onSubmit={this.onFeedbackSubmit} trimOnSubmit>
              <Checkbox name={'monitoring'} label={'Serverless Application Monitoring'} />
              <Checkbox name={'secret_manager'} label={'Serverless Secrets Manager'} />
              <Checkbox name={'on_premise'} label={'Serverless On-premise'} />
              <textarea className={styles.textarea} name='other' placeholder='Interested in other serverless tooling? Let us know' />
              <span className={styles.feedbackSubmit}>
                <Button kind='black' className={styles.btn} style={{display: 'inline-block', marginTop: 20}}>
                  Submit form
                </Button>
              </span>
            </AutoForm>
          </div>
        </Modal>
      </Page>
    )
  }
}
