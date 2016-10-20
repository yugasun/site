/**
 * TODO: depricate in favor of local github repo in here
 * Utility for syncing blog on local machine for debugging etc
 */
var config = require('./config')
var path = require('path')
const emptyDirectory = require('../utils/empty-directory')
const copyFiles = require('../utils/copy-files')
const blogRepoPath = config.blogRepoPath
const localBlogRepoPath = path.join(__dirname, '..', '..', '..', 'blog')

emptyDirectory(blogRepoPath, function () {
  copyFiles(localBlogRepoPath, blogRepoPath, function (error) {
    if (error) {
      console.log(error)
      console.log(`Blog not found at ${localBlogRepoPath}`)
      console.log(`Please git clone ${config.repoURL} into parent directory`)
      return false
    }
    console.log('Local blog sync done. please restart site')
    console.log(blogRepoPath)
  })
})
