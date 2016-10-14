/**
  Constants used for blog processing scripts
*/
var path = require('path')

module.exports = {
  blogNodeModulesPath: path.join(__dirname, '..', '..', 'node_modules/serverless-blog'),
  newBlogPath: path.join(__dirname, '..', '..', 'content/blog/'),
  oldBlogPath: path.join(__dirname, '..', '..', 'node_modules/serverless-blog/posts/'),
  downloadLink: 'https://github.com/serverless/blog/archive/master/.zip'
}
