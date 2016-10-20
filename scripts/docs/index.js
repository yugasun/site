const config = require('./config')
const asyncLib = require('async')
const emptyDirectory = require('../utils/empty-directory')
const copyFiles = require('../utils/copy-files')
const deleteMatchingDirectories = require('../utils/delete-matching-directories')
const renameFilesInDirectory = require('../utils/rename-files-in-directory')
const updateFileContents = require('./update-doc-content')
// var buildJSONDataMenus = require('./zbuild-json-menus')
const generateDocMenu = require('./generate-docs-menu')
// replace numbers in 00-name-of-dir
const replacePattern = /([0-9]{2})-/g

asyncLib.waterfall([
  function (next) {
    emptyDirectory(config.newDocsPath, (err) => {
      if (err) return next(err)
      next(null)
    })
  },
  function (next) {
    copyFiles(config.serverlessDocsPath, config.newDocsPath, (err) => {
      if (err) return next(err)
      console.log('copied doc files successfully')
      next(null)
    })
  },
  // Update yaml content and add github paths
  function (next) {
    updateFileContents(config.newDocsPath, (err) => {
      if (err) return next(err)
      console.log('update doc files contents successfully')
      next(null)
    })
  },
  function (next) {
    renameFilesInDirectory(config.newDocsPath, replacePattern, (err) => {
      if (err) return next(err)
      console.log('renamed doc files successfully')
      next(null)
    })
  },
  function (next) {
    deleteMatchingDirectories(config.newDocsPath, replacePattern, (err) => {
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
  // buildJSONDataMenus()
  generateDocMenu()
})
