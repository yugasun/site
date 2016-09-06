var fs = require('fs-extra')

module.exports = function emptyDirectory (path, callBack) {

  if (fs.existsSync(path)) {
    fs.emptyDir(path, function (error) {
      if (error) {
        console.log('emptyDirectory fail! ' + path)
        callBack(error)
      }
      callBack && callBack(null)
    })
  } else {
    callBack && callBack('error no dir found')
  }
}
