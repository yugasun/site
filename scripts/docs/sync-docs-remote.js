const download = require('../utils/download')
const rimraf = require('rimraf')
const config = require('./config')

rimraf(config.serverlessRepoPath, function () {
  console.log('Empty serverless docs directory', config.serverlessRepoPath)
  download(config.downloadLink, config.serverlessRepoPath, function (error) {
    if (error) {
      console.log(error)
      console.log('DOWNLOAD ERROR')
      return false
    }
    console.log('Finished downloading latest docs')
  })
})
