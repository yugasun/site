/**
 * Examples build pipeline
 */
const config = require('./config')
const asyncLib = require('async')
const axios = require('axios')
const emptyDirectory = require('../utils/empty-directory')
const renameAndCopyMdFiles = require('./rename-and-copy-md-files')
const updatePluginFileContent = require('./update-plugin-content')
let pluginsRawData

asyncLib.waterfall(
  [
    function(next) {
      emptyDirectory(config.pluginsTmpPath, err => {
        if (err) return next(err)
        next(null)
      })
    },
    function(next) {
      renameAndCopyMdFiles(
        config.pluginsRepoPath,
        config.pluginsTmpPath,
        err => {
          if (err) return next(err)
          console.log('Copied Plugins files successfully')
          next(null)
        }
      )
    },
    function(next) {
      //TODO: repeating this, fix
      axios
        .get(config.pluginsList)
        .then(function(response) {
          pluginsRawData = response.data
          next(null)
        })
        .catch(function(error) {
          next(error)
        })
    },
    function(next) {
      updatePluginFileContent(pluginsRawData, config.pluginsTmpPath, err => {
        if (err) return next(err)
        console.log('Updated Plugin content successfully')
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
