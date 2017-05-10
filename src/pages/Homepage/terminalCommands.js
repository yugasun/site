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
  },
  {
    text: '',
    type: 'empty',
    skip: true
  },
  {
    text: 'Read the <a href="https://serverless.com/framework/docs/">docs</a> or connect with the <a href="https://gitter.im/serverless/serverless">community</a>',
    type: 'cta',
    skip: true
  },
]
