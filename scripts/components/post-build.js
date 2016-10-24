const fs = require('fs-extra')
const path = require('path')
const dir = require('node-dir')
const componentsDir = path.join(__dirname, '..', '..', 'lib')

function updateFileContents(filePath, callBack) {
  dir.readFiles(filePath, {
    match: /.js$/,
    //exclude: /^\./
  }, (err, content, filename, next) => {
    if (err) throw err
    console.log(filename)

    const replace = content.replace(/\/\/ignoremodule.exports/g, 'module.exports')
    fs.writeFileSync(filename, replace)

    next()
  },
    (err, files) => {
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
