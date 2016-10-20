const download = require('../utils/download')
const config = require('./config')
const emptyDirectory = require('../utils/empty-directory')

emptyDirectory(config.serverlessRepoPath, function () {
  console.log('empty serverless docs directory')
  download(config.downloadLink, config.serverlessRepoPath, function (error) {
    if (error) {
      console.log(error)
      console.log('DOWNLOAD ERROR')
      return false
    }
    console.log('Finished downloading latest docs')
  })
})
