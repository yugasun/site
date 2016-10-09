var fs = require('fs-extra')

module.exports = function emptyDirectory (path, callBack) {
  fs.emptyDir(path, function (error) {
    if (error) {
      console.log('emptyDirectory fail! ' + path)
      callBack(error)
    }
    callBack && callBack(null)
  })
}
