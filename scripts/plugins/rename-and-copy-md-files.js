const dir = require('node-dir')
const fs = require('fs-extra')
const async = require('async')
const { readdirSync, statSync } = require('fs')
const { join } = require('path')
const getAllSubDirectories = p =>
  readdirSync(p).filter(f => statSync(join(p, f)).isDirectory())

module.exports = function copyMdFiles(repoPath, destinationPath, callback) {
  let allSubdirectories = getAllSubDirectories(repoPath)
  async.each(
    allSubdirectories,
    (thisDir, eachCallback) => {
      copyThisMdFile(repoPath, thisDir, destinationPath, err => {
        if (err) {
          eachCallback(err)
        } else {
          eachCallback()
        }
      })
    },
    err => {
      if (err) {
        callback(err)
      } else {
        callback(null)
      }
    }
  )
}

function copyThisMdFile(repoPath, dirPath, destinationPath, callback) {
  dir.readFiles(
    `${repoPath}/${dirPath}`,
    {
      match: /^Readme/i,
      recursive: false,
    },
    (err, content, next) => next(),
    function(err, files) {
      if (err) throw err
      async.each(
        files,
        (name, eachCallback) => {
          const fileFolderName = name.split('/').reverse()[1]
          const newFileName = `${fileFolderName}.md`
          const newFilePath = `${destinationPath}/${newFileName}`

          fs.copy(name, newFilePath, err => {
            if (err) eachCallback(err)
            eachCallback()
          })
        },
        err => {
          if (err) {
            callback(err)
          } else {
            callback(null)
          }
        }
      )
    }
  )
}
