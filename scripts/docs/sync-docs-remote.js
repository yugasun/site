const download = require('../utils/download')
const rimraf = require('rimraf')
const config = require('./config')
const request = require('sync-request')

rimraf(config.serverlessRepoPath, () => {
  console.log('Empty serverless docs directory', config.serverlessRepoPath)
  const latestReleaseUrl = getLatestReleaseUrl()
  download(config.downloadLink, config.serverlessRepoPath, error => {
    if (error) {
      console.log(error)
      console.log('DOWNLOAD ERROR')
      return false
    }
    console.log('Finished downloading latest docs')
  })
})

const getLatestReleaseUrl = () => {
  const opts = {
    headers: { 'User-Agent': 'Node.js', 'Content-Type': 'application/json' },
  }
  const res = request(
    'GET',
    'https://api.github.com/repos/serverless/serverless/releases/latest',
    opts
  )
  const body = JSON.parse(res.getBody('utf8'))
  return body.zipball_url
}
