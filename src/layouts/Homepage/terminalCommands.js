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
    text: '',
    type: 'empty',
    skip: true
  },
  {
    text: 'read the <a href="#">docs</a> or connect with the <a href="#">community</a>',
    type: 'cta',
    skip: true
  },
]
