module.exports = [
  {
    text: 'Install serverless globally',
    type: 'comment',
    skip: true
  },
  {
    text: 'npm install serverless -global',
    type: 'command'
  },
  {
    text: 'Create the project directory',
    type: 'comment',
    skip: true
  },
  {
    text: 'mkdir my-first-service && cd my-first-service',
    type: 'command'
  },
  {
    text: 'Create an AWS Lamdba function in Node.js',
    type: 'comment',
    skip: true
  },
  {
    text: 'serverless create --template aws-nodejs',
    type: 'command'
  },
  {
    text: 'Deploy to live AWS account',
    type: 'comment',
    skip: true
  },
  {
    text: 'serverless deploy',
    type: 'command'
  },
  {
    text: 'Function deployed!',
    type: 'comment',
    skip: true
  },
  {
    text: 'http://api.amazon.com/users/update live',
    type: 'command',
    skip: true
  },
  {
    text: '',
    type: 'empty',
    skip: true
  },
  {
    text: 'read the <a href="https://github.com/serverless/serverless/tree/master/docs">docs</a> or connect with the <a href="https://gitter.im/serverless/serverless">community</a>',
    type: 'cta',
    skip: true
  },
]
