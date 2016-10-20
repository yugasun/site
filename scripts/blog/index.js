const config = require('./config')
// const fs = require('fs-extra')
const asyncLib = require('async')
const emptyDirectory = require('../utils/empty-directory')
const copyFiles = require('../utils/copy-files')
const removeDateFromFileName = require('./remove-date-from-filename')
const updateBlogFileContents = require('./update-blog-yaml')

asyncLib.waterfall([
  function (next) {
    emptyDirectory(config.siteBlogPath, (err) => {
      if (err) return next(err)
      next(null)
    })
  },
  function (next) {
    copyFiles(config.blogRepoPostPath, config.siteBlogPath, (err) => {
      if (err) return next(err)
      console.log('copied Blog files successfully')
      next(null)
    })
  },
  // Update yaml content and add github paths
  function (next) {
    updateBlogFileContents(config.siteBlogPath, (err) => {
      if (err) return next(err)
      console.log('updated Blog content successfully')
      next(null, 'three')
    })
  },
  function (arg1, next) {
    removeDateFromFileName(config.siteBlogPath, (err, files) => {
      if (err) return next(err)
      console.log('renamed Blog files successfully')
      next(null, 'done')
    })
  },
], function (err, result) {
  if (err) {
    console.log('err', err)
  }
  console.log('Finished processing Blog posts')
})
