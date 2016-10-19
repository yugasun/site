/**
 * Utility for syncing docs on local machine for debugging etc
 */
var config = require('./config')
var path = require('path')
const emptyDirectory = require('../utils/empty-directory')
const copyFiles = require('../utils/copy-files')
const slsNodeModuleDocs = config.oldDocsPath
const localdocsPath = path.join(__dirname, '..', '..', '..', '/serverless/docs/')

emptyDirectory(slsNodeModuleDocs, function () {
  copyFiles(localdocsPath, slsNodeModuleDocs, function () {
    console.log('local docs sync done. please restart site')
  })
})
