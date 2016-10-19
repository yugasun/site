/**
 * Utility for syncing blog on local machine for debugging etc
 */
var config = require('./config')
var path = require('path')
const emptyDirectory = require('../utils/empty-directory')
const copyFiles = require('../utils/copy-files')
const blogNodeModulesPath = config.blogNodeModulesPath
const localBlogRepoPath = path.join(__dirname, '..', '..', '..', 'blog')

emptyDirectory(blogNodeModulesPath, function () {
  copyFiles(localBlogRepoPath, blogNodeModulesPath, function (error) {
    if (error) {
      console.log(error)
      console.log(`Blog not found at ${localBlogRepoPath}`)
      console.log(`Please git clone ${config.repoURL} into parent directory`)
      return false
    }
    console.log('Local blog sync done. please restart site')
  })
})
