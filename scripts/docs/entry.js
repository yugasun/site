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
      next(null)
    })
  },
  function (next) {
    copyFiles(config.oldDocsPath, config.newDocsPath, function (err) {
      if (err) return next(err)
      console.log('copied doc files successfully')
      next(null)
    })
  },
  // Update yaml content and add github paths
  function (next) {
    updateFileContents(config.newDocsPath, function (err) {
      if (err) return next(err)
      console.log('update doc files contents successfully')
      next(null)
    })
  },
  function (next) {
    renameFilesInDirectory(config.newDocsPath, replacePattern, function (err) {
      if (err) return next(err)
      console.log('renamed doc files successfully')
      next(null)
    })
  },
  function (next) {
    removeDirectory(config.newDocsPath, replacePattern, function (err) {
      if (err) return next(err)
      console.log('removed old doc files successfully')
      next(null)
    })
  }
], function (err, result) {
  if (err) {
    console.log('err', err)
  }
  console.log('Finished processing Docs')
  buildMenus()
})
