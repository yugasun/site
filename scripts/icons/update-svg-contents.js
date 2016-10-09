var fs = require('fs-extra')
var path = require('path')

module.exports = function renameSVGClasses (filePath, callBack) {
  var files = fs.readdirSync(filePath)
  files.map((file, i) => {
    var p = path.join(filePath, file)
    var name = path.basename(p, '.svg')
    fs.readFile(p, 'utf8', function (err, contents) {
      if (err) {
        console.log(err)
      }

      var matches = contents.match(/class="(.?)"/g)
      if (matches) {
        for (var n = 0; n < matches.length; n++) {
          var className = matches[n].replace('class=', '').replace(/"/g, '')
          var find = 'class="'+className+'"'
          var replace = 'class="' + name + '-' + className + '"'
          contents = contents.replace(find, replace)
          var findStyle = '.' + className
          var replaceStyle = '.' + name + '-' + className
          contents = contents.replace(findStyle, replaceStyle)
        }
      }

      fs.writeFileSync(p, contents)

      if (files.length === (i + 1)) {
        console.log('SVG contents update DONE')
        callBack && callBack(null, files)
      }
    })
  })
}
