/**
  Constants used for doc processing scripts
*/
var path = require('path')
const repoURL = 'https://github.com/serverless/serverless'
module.exports = {
  repoURL: repoURL,
  slsPath: path.join(__dirname, '..', '..', 'node_modules/serverless'),
  newDocsPath: path.join(__dirname, '..', '..', 'content/framework/docs/'),
  oldDocsPath: path.join(__dirname, '..', '..', 'node_modules/serverless/docs/'),
  docsMenuPath: path.join(__dirname, '..', '..', 'src/layouts/Doc/'),
  downloadLink: `${repoURL}/archive/master/.zip`
}
