const config = require('./config')
const fs = require('fs-extra')
const examplesDirectoryRepoPath = config.examplesRepoPath

//TODO: abstract this so it can become a generic util function

module.exports = async function removeUnrelatedFiles (callback) {
    try {
      await fs.remove(`${examplesDirectoryRepoPath}/README.md`)
      await fs.remove(`${examplesDirectoryRepoPath}/.github`)
      callback(null)
    } catch (err) {
      callback(err)
    }
}