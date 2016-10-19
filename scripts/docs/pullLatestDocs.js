const download = require('../utils/download')
const config = require('./config')
const emptyDirectory = require('../utils/empty-directory')

emptyDirectory(config.slsPath, function () {
  console.log('empty serverless docs directory')
  download(config.downloadLink, config.slsPath, function () {
    console.log('done downloading docs')
  })
})
