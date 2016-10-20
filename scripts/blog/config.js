/**
  Constants used for blog processing scripts
*/
var path = require('path')
const repoURL = 'https://github.com/serverless/blog'
const projectRoot = path.join(__dirname, '..', '..')

module.exports = {
  repoURL: repoURL,
  blogRepoPath: path.join(projectRoot, 'content-external/serverless-blog'),
  blogRepoPostPath: path.join(projectRoot, 'content-external/serverless-blog/posts/'),
  siteBlogPath: path.join(projectRoot, 'content/blog/'),
  downloadLink: `${repoURL}/archive/master/.zip`
}
