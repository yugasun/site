const download = require('../utils/download-new')
const config = require('./config')
const pluginsRepoPath = config.pluginsRepoPath
const rimraf = require('rimraf')
const axios = require('axios')
const async = require('async')

//TODO: resolve error downloads (gitlab, child dir, old etc)
rimraf(pluginsRepoPath, () => {
  axios
    .get(config.pluginsList)
    .then(function(response) {
      downloadTheseRepos(response.data)
    })
    .catch(function(error) {
      console.log('PLUGINS DOWNLOAD ERROR')
    })
})

function downloadTheseRepos(allRepos) {
  async.eachLimit(
    allRepos,
    20,
    (thisRepo, eachCallback) => {
      const thisRepoUrl = thisRepo.repoUrl.endsWith('/')
        ? thisRepo.repoUrl.slice(0, -1)
        : thisRepo.repoUrl
      if (thisRepoUrl) {
        const downloadLink = `${thisRepoUrl}/archive/master/.zip`
        const repoUrlSplit = thisRepoUrl.split('/')
        const repoName = repoUrlSplit[repoUrlSplit.length - 1]
        download(downloadLink, `${pluginsRepoPath}/${repoName}`, error => {
          if (error) {
            eachCallback()
          } else {
            eachCallback()
          }
        })
      } else {
        eachCallback()
      }
    },
    err => {
      if (err) {
        console.log('error downloading plugins', err)
      } else {
        console.log('PLUGINS SUCCESSFULLY DOWNLOADED')
      }
    }
  )
}
