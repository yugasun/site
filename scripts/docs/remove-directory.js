var fs = require('fs-extra')
var dir = require('node-dir')

module.exports = function deleteDirectories (path, pattern, callBack) {
  dir.subdirs(path, function (err, subdirs) {
    if (err) {
      throw err
    }
    subdirs.filter(function (x) {
      return x.match(/([0-9]{2})-/g)
    }).forEach(function (dir) {
      fs.removeSync(dir, function (err) {
        if (err) {
          return callBack && callBack(err)
        }
        console.log('success!')
      })
    })
    callBack && callBack(null)
  })
}
