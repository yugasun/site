const download = require('../utils/download')
const config = require('./config')

download(config.downloadLink, config.blogNodeModulesPath, function() {
  console.log('done downloading blog')
})
