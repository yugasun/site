const download = require('../utils/download')
const config = require('./config')
const examplesRepoPath = config.examplesRepoPath
const downloadLink = config.downloadLink
const rimraf = require('rimraf')

rimraf(examplesRepoPath, () => {
  console.log('empty local examples directory')
  download(downloadLink, examplesRepoPath, (error) => {
    if (error) {
      console.log(error)
      console.log('DOWNLOAD ERROR')
      return false
    }
    console.log('Finished downloading latest examples')
    console.log(examplesRepoPath)
  })
})
