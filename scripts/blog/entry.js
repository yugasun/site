var config = require('./config')
var fs = require('fs-extra')
var async = require('async')
var emptyDirectory = require('../docs/empty-directory')
var copyFiles = require('../docs/copy-files')
var renameFilesInDirectory = require('./rename-blog-posts')
var updateBlogFileContents = require('./update-blog-yaml')

var replacePattern = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])-/g

async.waterfall([
  function (next) {
    emptyDirectory(config.newBlogPath, function (err) {
      if (err) return next(err)
      next(null)
    })
  },
  function (next) {
    copyFiles(config.oldBlogPath, config.newBlogPath, function (err) {
      if (err) return next(err)
      console.log('copied Blog files successfully')
      next(null)
    })
  },
  // Update yaml content and add github paths
  function (next) {
    updateBlogFileContents(config.newBlogPath, function (err) {
      if (err) return next(err)
      console.log('updated Blog content successfully')
      next(null, 'three')
    })
  },
  function (arg1, next) {
    renameFilesInDirectory(config.newBlogPath, replacePattern, function (err, files) {
      if (err) return next(err)
      console.log('renamed Blog files successfully')
      next(null, 'done')
    })
  },
], function (err, result) {
  if (err) {
    console.log('err', err)
  }
  console.log('Finished processing Blog posts')
})
