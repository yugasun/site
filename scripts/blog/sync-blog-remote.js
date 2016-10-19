const download = require('../utils/download')
const config = require('./config')
const emptyDirectory = require('../utils/empty-directory')

emptyDirectory(config.blogNodeModulesPath, function () {
  console.log('empty local blog directory')
  download(config.downloadLink, config.blogNodeModulesPath, function (error) {
    if (error) {
      console.log(error)
      console.log('DOWNLOAD ERROR')
      return false
    }
    console.log('Finished downloading latest blog')
  })
})
