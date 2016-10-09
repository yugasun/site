var fs = require('fs-extra')
var path = require('path')
var SVGO = require('svgo')
var SVGOConfig = require('./svgo-config')

module.exports = function optimizeSVG (svgPath, destinationFolder, cb) {
  var name = path.basename(svgPath)
  var SVGOSettings = SVGOConfig('svg-' + name.replace('.svg', ''))
  var svgo = new SVGO(SVGOSettings)
  fs.readFile(svgPath, 'utf8', function (err, data) {
    if (err) {
      throw err
    }

    svgo.optimize(data, function (result) {
        // console.log(result);
      var outputPath = path.join(destinationFolder, name)
      fs.writeFile(outputPath, result.data, function (err) {
        if (err) {
          return console.log(err)
        }
        console.log(name + ' copied to lib!')
        if(cb) {
          cb(null)
        }
      })
    })
  })
}
