/**
 * Examples build pipeline
 */
const config = require('./config')
const asyncLib = require('async')
const emptyDirectory = require('../utils/empty-directory')
const removeUnrelatedFiles = require('./remove-unrelated-files-from-source')
const renameAndCopyMdFiles = require('./rename-and-copy-md-files')
const updateExampleFileContent = require('./update-example-content')

asyncLib.waterfall([
  function (next) {
    emptyDirectory(config.examplesTmpPath, (err) => {
      if (err) return next(err)
      next(null)
    })
  },
  function (next) {
    removeUnrelatedFiles((err) => {
       if (err) return next(err)
       next(null) 
    })
  },
  function (next) {
    renameAndCopyMdFiles(config.examplesRepoPath, config.examplesTmpPath, (err) => {
      if (err) return next(err)
      console.log('Copied Example files successfully')
      next(null)
    })
  },
  function (next) {
    updateExampleFileContent(config.examplesTmpPath, (err) => {
      if (err) return next(err)
      console.log('Updated Example content successfully')
      next(null)
    })
  },
], (err, result) => {
  if (err) {
    console.log('err', err)
  }
})
