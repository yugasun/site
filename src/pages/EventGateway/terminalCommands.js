module.exports = [
  {
    text: 'Install serverless globally',
    type: 'comment',
    skip: true
  },
  {
    text: 'npm install serverless -g',
    type: 'command'
  },
  {
    text: 'Login to your Serverless account',
    type: 'comment',
    skip: true
  },
  {
    text: 'serverless login',
    type: 'command'
  },
  {
    text: 'Create a serverless function',
    type: 'comment',
    skip: true
  },
  {
    text: 'serverless create --template hello-world',
    type: 'command'
  },
  {
    text: 'Deploy to cloud provider',
    type: 'comment',
    skip: true
  },
  {
    text: 'serverless deploy',
    type: 'command'
  },
  {
    text: 'Function deployed! Trigger with live url',
    type: 'comment',
    skip: true
  },
  {
    // efi4rjb098.execute-api.us-east-1.amazonaws.com
    text: 'http://xyz.amazonaws.com/hello-world',
    type: 'command',
    skip: true
  }
]
