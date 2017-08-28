/**
 * 404 page template
 */
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import axios from 'axios' // eslint-disable-line
import { Link } from 'react-router' // eslint-disable-line
import { setItem, getItem } from '../../utils/storage' // eslint-disable-line
import Terminal from '../../components/Terminal'
import identify from '../../utils/analytics/identify'
import track from '../../utils/analytics/track'
import removeURLParams from '../../utils/analytics/source/removeURLParams'
import { getParams } from '../../utils/analytics/source/urlParams'
import styles from './index.css'

const commands = [
  {
    text: 'Step 1. Install serverless globally',
    type: 'comment',
    skip: true
  },
  {
    text: 'npm install serverless -g',
    type: 'command'
  },
  {
    text: 'Step 2. Login to your Serverless account',
    type: 'comment',
    skip: true
  },
  {
    text: 'serverless login',
    type: 'command'
  },
  {
    text: 'Step 3. Create a serverless function',
    type: 'comment',
    skip: true
  },
  {
    text: 'serverless create --template hello-world',
    type: 'command'
  },
  {
    text: 'Step 4. Deploy to cloud provider',
    type: 'comment',
    skip: true
  },
  {
    text: 'serverless deploy',
    type: 'command'
  },
  {
    text: 'Your Function is deployed!',
    type: 'comment',
    skip: true
  },
  {
    // efi4rjb098.execute-api.us-east-1.amazonaws.com
    text: 'http://xyz.amazonaws.com/hello-world',
    type: 'command',
    skip: true
  },
]

export default class Welcome extends Component {
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
    this.state = {
      terminalFinished: false,
    }
  }
  componentDidMount() {
    // check if mobile
  }
  handleTerminalComplete = () => {
    this.setState({
      terminalFinished: true
    })
  }
  renderWhenFinished() {
    const { terminalFinished } = this.state
    if (terminalFinished) {
      return (
        <div className={styles.description + ' ' + styles.finished}>
          Welcome to the serverless movement<br/>
          <a className={styles.docsLink} href='/framework/docs/getting-started'>
            Getting Started Docs
          </a>
        </div>
      )
    }
    return null
  }
  render() {

    return (
      <div className={styles.container}>
        <Helmet title={'Welcome to Serverless'} />
        <div className={styles.inner} >
          <div className={styles.hero}>
            <h1>Welcome to Serverless 🎉</h1>
            <div className={styles.description}>
              Lets get started. <br/><br/>Open your terminal and run the following commands:
            </div>
          </div>

          <div className={styles.terminalContainer}>
            <Terminal
              className={styles.terminal}
              commands={commands}
              onComplete={this.handleTerminalComplete}
            />
          </div>
          {this.renderWhenFinished()}
          <div style={{display: 'none'}}>
            <h2>Install the Serverless CLI</h2>
            <p>In your terminal, run:</p>
            <code>npm install serverless -g</code>

            <h2>Login to your Serverless account</h2>
            <p>In your terminal, run:</p>
            <code>serverless login</code>
          </div>
        </div>
      </div>
    )
  }
}
