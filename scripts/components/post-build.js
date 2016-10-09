var fs = require('fs-extra')
var path = require('path')
var dir = require('node-dir')
var componentsDir = path.join(__dirname, '..', '..', 'lib')

function updateFileContents (filePath, callBack) {
  dir.readFiles(filePath, {
    match: /.js$/,
    //exclude: /^\./
  }, function (err, content, filename, next) {
    if (err) throw err
    console.log(filename)

    var replace = content.replace(/\/\/ignoremodule.exports/g, 'module.exports')
    fs.writeFileSync(filename, replace)

    next()
  },
    function (err, files) {
      if (err) {
        console.log(err)
        callBack && callBack(err)
      }
      console.log('Components rdy to rock and roll')
      callBack && callBack(null, files)
    }
  )
}

updateFileContents(componentsDir)
