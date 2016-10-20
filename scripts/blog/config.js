/**
  Constants used for blog processing scripts
*/
var path = require('path')
const projectRoot = path.join(__dirname, '..', '..')
const repoURL = 'https://github.com/serverless/blog'
const repoBranch = 'master'

module.exports = {
  repoURL: repoURL,
  repoBranch: repoBranch,
  downloadLink: `${repoURL}/archive/${repoBranch}/.zip`,
  // blogRepoPath: path.join(projectRoot, 'content-external/serverless-blog'),
  // blogRepoPostPath: path.join(projectRoot, 'content-external/serverless-blog/posts/'),
  blogRepoPath: path.join(projectRoot, 'serverless-blog'),
  blogRepoPostPath: path.join(projectRoot, 'serverless-blog/posts/'),
  siteBlogPath: path.join(projectRoot, 'content/blog/'),
}
