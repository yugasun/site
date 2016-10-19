/**
  Constants used for blog processing scripts
*/
var path = require('path')
const repoURL = 'https://github.com/serverless/blog'
module.exports = {
  repoURL: repoURL,
  blogNodeModulesPath: path.join(__dirname, '..', '..', 'temp/serverless-blog'),
  newBlogPath: path.join(__dirname, '..', '..', 'content/blog/'),
  oldBlogPath: path.join(__dirname, '..', '..', 'temp/serverless-blog/posts/'),
  downloadLink: `${repoURL}/archive/master/.zip`
}
