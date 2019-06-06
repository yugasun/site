/**
  Constants used for doc processing scripts
*/
const path = require('path')
const projectRoot = path.join(__dirname, '..', '..')
const repoURL = 'https://github.com/serverless/enterprise'
// set branch of docs you want to see (set to tag of latest release)
const repoBranch = 'new-docs-frontend-copy-update'
/* uncomment out the line below to work locally with different docs branch
repoBranch = 'improve-docs'
/**/

module.exports = {
  repoURL,
  repoBranch,
  serverlessRepoPath: path.join(projectRoot, 'serverless-enterprise'),
  serverlessDocsPath: path.join(projectRoot, 'serverless-enterprise/docs/'),
  // path to where docs live in site content folder
  mainSiteDocsPath: path.join(projectRoot, 'content/enterprise/'),
  siteEnterpriseDocsPath: path.join(projectRoot, 'content/enterprise/docs/'),
  docsMenuPath: path.join(projectRoot, 'src/constants/'),
  // comment out downloadLink to use latest release
  downloadLink: `${repoURL}/archive/${repoBranch}/.zip`,
}
