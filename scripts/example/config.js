/**
  Constants used for examples processing scripts
*/
const path = require('path')
const projectRoot = path.join(__dirname, '..', '..')
const repoURL = 'https://github.com/serverless/examples'
const repoBranch = 'master'
const featuredExamples = [
  'aws-java-simple-http-endpoint',
  'aws-node-alexa-skill',
  'aws-node-auth0-cognito-custom-authorizers-api',
  'aws-node-auth0-custom-authorizers-api',
  'aws-node-dynamodb-backup',
  'aws-node-env-variables-encrypted-in-a-file',
  'aws-node-env-variables',
  'aws-node-fetch-file-and-store-in-s3',
  'aws-node-function-compiled-with-babel',
  'aws-node-github-webhook-listener',
  'aws-node-graphql-api-with-dynamodb',
  'aws-node-iot-event',
  'aws-node-oauth-dropbox-api',
  'aws-node-recursive-function',
  'aws-node-rekognition-analysis-s3-image',
]

module.exports = {
  repoURL,
  repoBranch,
  featuredExamples,
  downloadLink: `${repoURL}/archive/master/.zip`,
  examplesRepoPath: path.join(projectRoot, 'serverless-examples'),
  examplesTmpPath: path.join(projectRoot, 'content/examples'),
  siteExamplePath: path.join(projectRoot, 'content/examples/'),
}
