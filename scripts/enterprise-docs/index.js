/**
 * Docs build pipeline
 */
const asyncLib = require('async')
const emptyDirectory = require('../utils/empty-directory')
const copyFiles = require('../utils/copy-files')
const deleteMatchingDirectories = require('../utils/delete-matching-directories')
const renameFilesInDirectory = require('../utils/rename-files-in-directory')
const updateFileContents = require('./update-enterprise-doc-content')
// var buildJSONDataMenus = require('./zbuild-json-menus')
const generateDocMenu = require('./generate-menus')
const notice = require('./notice')
const config = require('./config')
const siteEnterpriseDocsPath = config.siteEnterpriseDocsPath
// replace numbers in 00-name-of-dir
const replacePattern = /([0-9]{2})-/g

asyncLib.waterfall(
  [
    function(next) {
      emptyDirectory(siteEnterpriseDocsPath, err => {
        if (err) return next(err)
        next(null)
      })
    },
    function(next) {
      copyFiles(config.serverlessDocsPath, siteEnterpriseDocsPath, err => {
        if (err) return next(err)
        console.log('Copied doc files successfully')
        next(null)
      })
    },
    // Update yaml content and add github paths
    function(next) {
      updateFileContents(siteEnterpriseDocsPath, err => {
        if (err) return next(err)
        console.log('Update doc files contents successfully')
        next(null)
      })
    },
    function(next) {
      renameFilesInDirectory(siteEnterpriseDocsPath, replacePattern, err => {
        if (err) return next(err)
        console.log('Renamed doc files successfully')
        next(null)
      })
    },
    function(next) {
      deleteMatchingDirectories(siteEnterpriseDocsPath, replacePattern, err => {
        if (err) return next(err)
        console.log('Removed old doc files successfully')
        next(null)
      })
    },
  ],
  (err, result) => {
    if (err) {
      console.log('err', err)
    }
    console.log('Finished processing Docs')
    // buildJSONDataMenus()
    setTimeout(() => {
      generateDocMenu()
      notice()
    }, 100)
  }
)
