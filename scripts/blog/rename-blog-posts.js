var dir = require('node-dir')
var fs = require('fs-extra')

module.exports = function renameFilesInDirectory (directoryPath, pattern, callBack) {
  dir.files(directoryPath, function (err, files) {
    if (err) {
      throw err
    }
    files.forEach(function (name) {
      var newName = name.replace(pattern, '')
      if (name !== newName) {
        fs.copy(name, newName, function (err) {
          if (err) {
            console.log('error copying files')
            return callBack(err)
          }
          // remove old post
          fs.removeSync(name)
        })
      }
    })
    callBack && callBack(null)
  })
}
