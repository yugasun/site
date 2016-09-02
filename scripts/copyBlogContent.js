var dir = require('node-dir')
var fs = require('fs-extra')
var path = require('path')
var matter = require('gray-matter')
var destPath = path.join(__dirname, '..', 'content/blog/')
var blogSrcPath = path.join(__dirname, '..', 'node_modules/serverless-blog/posts/')

// Clear blog contents
fs.emptyDir(destPath, function (err) {
  if (err) {
    console.log('emptyDir fail!')
  }
  console.log('Blog folder emptied!')
  fs.copy(blogSrcPath, destPath, function (err) {
    if (err) return console.error(err)
    console.log("Blog content successfully moved!")
    renameAllFiles(destPath)
  });
})
// Copy and rename files
function renameAllFiles (filePath) {
  dir.files(filePath, function (err, files) {
    if (err) {
      throw err
    }
    files.forEach(function (name) {
      var newName = name.replace(/[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])-/g, '')
      fs.copy(name, newName, function (err) {
        if (err) {
          return console.error(err)
        }
        // remove old post
        fs.removeSync(name)
        // Do stuff to new post
        // run old_link script?
      })
    })
  })
}
