const download = require('../utils/download')
const rimraf = require('rimraf')
const config = require('./config')
const emptyDirectory = require('../utils/empty-directory')

rimraf(config.serverlessRepoPath, function () {
  console.log('empty serverless docs directory')
  console.log('REMVOED', config.serverlessRepoPath)
  download(config.downloadLink, config.serverlessRepoPath, function (error) {
    if (error) {
      console.log(error)
      console.log('DOWNLOAD ERROR')
      return false
    }
    console.log('Finished downloading latest docs')
  })
})
