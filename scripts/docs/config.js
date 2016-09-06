/**
  Constants used for doc processing scripts
*/
var path = require('path')

module.exports = {
  newDocsPath: path.join(__dirname, '..', '..', 'content/framework/docs/'),
  oldDocsPath: path.join(__dirname, '..', '..', 'node_modules/serverless/docs/')
}
