var fs = require('fs-extra')

module.exports = function emptyDirectory (path, callBack) {

  if (fs.existsSync(path)) {
    fs.emptyDir(path, function (error) {
      console.log(error)
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
