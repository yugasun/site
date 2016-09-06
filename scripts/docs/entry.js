var config = require('./config')
var async = require('async')
var emptyDirectory = require('./empty-directory')
var removeDirectory = require('./remove-directory')
var copyFiles = require('./copy-files')
var renameFilesInDirectory = require('./rename-files')
var updateFileContents = require('./update-doc-content')
var buildMenus = require('./build-menus')
var replacePattern = /([0-9]{2})-/g

async.waterfall([
  function (next) {
    emptyDirectory(config.newDocsPath, function (err) {
      if (err) return next(err)
      next(null, 'one', 'two')
    })
  },
  function (arg1, arg2, next) {
    console.log('second ran')
    copyFiles(config.oldDocsPath, config.newDocsPath, function (err) {
      if (err) return next(err)
      next(null)
    })
  },
  // Update yaml content and add github paths
  function (next) {
    updateFileContents(config.newDocsPath, function (err) {
      if (err) return next(err)
      next(null, 'three')
    })
  },
  function (arg1, next) {
    renameFilesInDirectory(config.newDocsPath, replacePattern, function () {
      next(null, 'done')
    })
  },
  function (arg1, next) {
    removeDirectory(config.newDocsPath, replacePattern, function () {
      next(null, 'done')
    })
  }
], function (err, result) {
  if (err) {
    console.log('err', err)
  }
  console.log('Finished processing Docs')
  buildMenus()
})
