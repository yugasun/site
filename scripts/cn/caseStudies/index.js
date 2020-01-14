/**
 * CaseStudies build pipeline
 */
const config = require('./config')
const fs = require('fs-extra')
const path = require('path')
const asyncLib = require('async')
const emptyDirectory = require('../../utils/empty-directory')
const copyFiles = require('../../utils/copy-files')
const removeDateFromFileName = require('./remove-date-from-filename')
const updateCaseStudiesFileContents = require('./update-caseStudies-yaml')

asyncLib.waterfall([
  function (next) {
    emptyDirectory(config.siteCaseStudiesPath, (err) => {
      if (err) return next(err)
      next(null)
    })
  },
  function (next) {
    copyFiles(config.caseStudiesRepoPostPath, config.siteCaseStudiesPath, (err) => {
      if (err) return next(err)
      console.log('Copied case studies files successfully')
      next(null)
    })
  },
  // Update yaml content and add github paths
  function (next) {
    updateCaseStudiesFileContents(config.siteCaseStudiesPath, (err) => {
      if (err) return next(err)
      console.log('Updated case studies content successfully')
      next(null, 'three')
    })
  },
  function (arg1, next) {
    removeDateFromFileName(config.siteCaseStudiesPath, (err, files) => {
      if (err) return next(err)
      console.log('Renamed case studies files successfully')
      next(null, 'done')
    })
  },
], (err, result) => {
  if (err) {
    console.log('err', err)
  }
  console.log('Finished processing case studies posts')
})
