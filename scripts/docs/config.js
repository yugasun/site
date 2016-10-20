/**
  Constants used for doc processing scripts
*/
var path = require('path')
const repoURL = 'https://github.com/serverless/serverless'
const projectRoot = path.join(__dirname, '..', '..')

module.exports = {
  repoURL: repoURL,
  serverlessRepoPath: path.join(projectRoot, 'serverless'),
  serverlessDocsPath: path.join(projectRoot, 'serverless/docs/'),
  // path to where docs live in site content folder
  siteDocsPath: path.join(projectRoot, 'content/framework/docs/'),
  docsMenuPath: path.join(projectRoot, 'src/layouts/Doc/'),
  // downloadLink: `${repoURL}/archive/master/.zip`
  downloadLink: `${repoURL}/archive/improve-docs/.zip`
}
