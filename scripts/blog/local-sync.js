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
  copyFiles(localBlogRepoPath, blogNodeModulesPath, function () {
    console.log('local blog sync done. please restart site')
  })
})
