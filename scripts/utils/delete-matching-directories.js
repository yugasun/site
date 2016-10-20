/*
Remove all directories that match a specific regex pattern
*/
var fs = require('fs-extra')
var dir = require('node-dir')

module.exports = function deleteMatchingDirectories (path, pattern, callBack) {
  dir.subdirs(path, function (err, subdirs) {
    if (err) {
      return callBack && callBack(err)
    }
    subdirs.filter(function (x) {
      return x.match(pattern)
    }).forEach(function (dir) {
      fs.removeSync(dir, function (err) {
        if (err) {
          return callBack && callBack(err)
        }
        console.log(`success! all directories matching ${pattern} removed`)
      })
    })
    callBack && callBack(null)
  })
}
