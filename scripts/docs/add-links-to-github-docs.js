/**
  Add content to github version of docs
*/
var fs = require('fs-extra')
var path = require('path')
var dir = require('node-dir')
var sitePath = 'https://serverless.com/framework/docs'
var repoPath = path.join(__dirname, '..', '..', 'node_modules', 'serverless', 'docs')

function updateFileContents (filePath, callBack) {
  dir.readFiles(filePath, {
    match: /.md$/,
    //exclude: /^\./
  }, function (err, content, filename, next) {
    if (err) throw err

    var relativePath = filename.replace(/([0-9]{2})-/g, '')
    .replace('README.md', '')
    .replace('.md', '')

    var url = relativePath.replace(repoPath, '')
    var linkToDocsOnSite = sitePath + url

    var replace = updateContent(content, linkToDocsOnSite)

    fs.writeFileSync(filename, replace)

    next()
  },
    function (err, files) {
      if (err) {
        console.log(err)
        callBack && callBack(err)
      }
      callBack && callBack(null, files)
    }
  )
}

function updateContent (content, link) {
  // fix links for website
  var updatedContent = `${content}
<p class='site-link' align='right'><a href='${link}'></a></p>
`
  var removal = updatedContent.replace(/\<p class='site-link'.*p\>/g, 'empty')
  // console.log('removal', removal) for future use
  return updatedContent
}

updateFileContents(repoPath)
