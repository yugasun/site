/**
  Constants used for blog processing scripts
*/
var path = require('path')

module.exports = {
  newBlogPath: path.join(__dirname, '..', '..', 'content/blog/'),
  oldBlogPath: path.join(__dirname, '..', '..', 'node_modules/serverless-blog/posts/')
}
