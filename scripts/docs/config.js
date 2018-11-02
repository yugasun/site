/**
  Constants used for doc processing scripts
*/
const path = require('path')
const projectRoot = path.join(__dirname, '..', '..')
const repoURL = 'https://github.com/pdaryani/serverless' //TODO: revert to serverless/serverless
// set branch of docs you want to see
const repoBranch = 'doc-build-error-fix' //TODO: revert to master
/* uncomment out the line below to work locally with different docs branch
repoBranch = 'improve-docs'
/**/

module.exports = {
  repoURL,
  repoBranch,
  serverlessRepoPath: path.join(projectRoot, 'serverless'),
  serverlessDocsPath: path.join(projectRoot, 'serverless/docs/'),
  // path to where docs live in site content folder
  mainSiteDocsPath: path.join(projectRoot, 'content/framework/'),
  siteDocsPath: path.join(projectRoot, 'content/framework/docs/'),
  docsMenuPath: path.join(projectRoot, 'src/constants/'),
  // downloadLink: `${repoURL}/archive/master/.zip`
  downloadLink: `${repoURL}/archive/${repoBranch}/.zip`
}
// TODO pull in latest release not master for docs build
// https://api.github.com/repos/serverless/serverless/releases/latest
// https://github.com/serverless/serverless/archive/v1.20.2.zip
