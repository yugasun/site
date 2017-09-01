import React from 'react'
import Terminal from '../../components/Terminal'
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


const TerminalCTA = (props) => {
  return (
    <Terminal
      className={styles.terminal}
      commands={commands}
      onComplete={props.onComplete}
    />
  )
}

export default TerminalCTA
