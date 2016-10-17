const download = require('../utils/download')
const config = require('./config')

download(config.downloadLink, config.slsPath, function() {
  console.log('done downloading docs')
})
