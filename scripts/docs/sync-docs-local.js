/**
 * TODO: depricate in favor of local github repo in here
 * Utility for syncing docs on local machine for debugging etc
 */
var config = require('./config')
var path = require('path')
const emptyDirectory = require('../utils/empty-directory')
const copyFiles = require('../utils/copy-files')
const serverlessDocsPath = config.serverlessDocsPath
const localdocsPath = path.join(__dirname, '..', '..', '..', '/serverless/docs/')

emptyDirectory(serverlessDocsPath, function () {
  copyFiles(localdocsPath, serverlessDocsPath, function (error) {
    if (error) {
      console.log(error)
      console.log(`Docs not found at ${localdocsPath}`)
      console.log(`Please git clone ${config.repoURL} into parent directory`)
      return false
    }
    console.log('Local docs sync done.')
    console.log(serverlessDocsPath)
    console.log('Stop and restart site')
  })
})
