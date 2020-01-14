/**
 * Examples build pipeline
 */
const config = require('./config')
const asyncLib = require('async')
const axios = require('axios')
const emptyDirectory = require('../../utils/empty-directory')
const renameAndCopyMdFiles = require('./rename-and-copy-md-files')
const updateComponentFileContent = require('./update-component-content')
let componentsRawData

asyncLib.waterfall(
  [
    function(next) {
      emptyDirectory(config.componentsTmpPath, err => {
        if (err) return next(err)
        next(null)
      })
    },
    function(next) {
      renameAndCopyMdFiles(
        config.componentsRepoPath,
        config.componentsTmpPath,
        err => {
          if (err) return next(err)
          console.log('Copied Components files successfully')
          next(null)
        }
      )
    },
    function(next) {
      //TODO: repeating this, fix
      axios
        .get(config.componentsList)
        .then(function(response) {
          componentsRawData = response.data
          next(null)
        })
        .catch(function(error) {
          next(error)
        })
    },
    function(next) {
      updateComponentFileContent(componentsRawData, config.componentsTmpPath, err => {
        if (err) return next(err)
        console.log('Updated Component content successfully')
        next(null)
      })
    },
  ],
  (err, result) => {
    if (err) {
      console.log('err', err)
    }
  }
)
