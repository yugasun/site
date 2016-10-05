var async = require('async')
var fs = require('fs-extra')
var path = require('path')
var optimizeSVG = require('./optimize-svg')
var fixSpriteClassNames = require('./update-svg-contents')
var generateSprite = require('./generate-sprite')
var generateList = require('./generate-list')
var svgs = path.join(__dirname, '..', '..', 'src', 'assets', 'icons')
var dest = path.join(__dirname, '..', '..', 'dist', 'icons')

var iconsInProject = fs.readdirSync(svgs).filter(function (x) {
  return x.match(/\.svg$/) && !x.match(/sprite/)
})

async.waterfall([
  function (next) {
    // empty tmp svg folder
    fs.emptyDir(dest, function (error) {
      if (error) {
        next(error)
      }
      next(null)
    })
  },
  function (next) {
    // optimize all SVGs
    for (var i = 0; i < iconsInProject.length; i++) {
      var svg = path.join(svgs, iconsInProject[i])
      var cb = (iconsInProject.length === (i + 1)) ? next : null
      optimizeSVG(svg, dest, cb)
    }
  },
  // Update svg content to fix className clashes
  function (next) {
    fixSpriteClassNames(dest, function (err, files) {
      if (err) {
        next(err)
      }
      next(null, files)
    })
  },
  function (files, next) {
    // make sprite file
    generateSprite(dest, files, next)
  },
], function (err, result) {
  if (err) {
    console.log('error', err)
  }

  generateList(iconsInProject, svgs)
  console.log('Finished processing Icons')
})
