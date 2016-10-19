const download = require('../utils/download')
const config = require('./config')
const emptyDirectory = require('../utils/empty-directory')

emptyDirectory(config.blogNodeModulesPath, function () {
  console.log('empty blog directory')
  download(config.downloadLink, config.blogNodeModulesPath, function () {
    console.log('done downloading blog')
  })
})
