const download = require('../../utils/download')
const emptyDirectory = require('../../utils/empty-directory')
const config = require('./config')
const caseStudiesRepoPath = config.caseStudiesRepoPath
const downloadLink = config.downloadLink
const rimraf = require('rimraf')

rimraf(caseStudiesRepoPath, () => {
  console.log('empty local caseStudies directory')
  download(downloadLink, caseStudiesRepoPath, (error) => {
    if (error) {
      console.log(error)
      console.log('DOWNLOAD ERROR')
      return false
    }
    console.log('Finished downloading latest caseStudies')
    console.log(caseStudiesRepoPath)
  })
})
