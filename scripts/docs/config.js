/**
  Constants used for doc processing scripts
*/
var path = require('path')
const repoURL = 'https://github.com/serverless/serverless'
const projectRoot = path.join(__dirname, '..', '..')

module.exports = {
  repoURL: repoURL,
  // serverlessRepoPath: path.join(projectRoot, 'content-external/serverless'),
  // serverlessDocsPath: path.join(projectRoot, 'content-external/serverless/docs/'),
  serverlessRepoPath: path.join(projectRoot, 'serverless'),
  serverlessDocsPath: path.join(projectRoot, 'serverless/docs/'),
  newDocsPath: path.join(projectRoot, 'content/framework/docs/'),
  docsMenuPath: path.join(projectRoot, 'src/layouts/Doc/'),
  downloadLink: `${repoURL}/archive/improve-docs/.zip`
}
