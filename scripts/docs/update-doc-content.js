var fs = require('fs-extra')
var path = require('path')
var dir = require('node-dir')
var matter = require('gray-matter')
var jsonToYaml = require('yamljs')

module.exports = function updateFileContents (filePath, callBack) {
  dir.readFiles(filePath, {
    match: /.md$/,
    //exclude: /^\./
  }, function (err, content, filename, next) {
    if (err) throw err

    var replace = fixYamlContent(content, filename)
    // parse yaml frontmatter for title
    var item = matter(replace).data
    item.gitLink = filename.split('framework')[1]
    var updatedFrontmatter = jsonToYaml.stringify(item)
    // regex patterns to match frontmatter
    // ---(\s*?.*?)*?---
    // ^(---)(\s*?.*?)*?(---)
    // ^---(\s*?.*?)*?---
    var newYamlContent = `---
${updatedFrontmatter}---`

    var finalNewContent = replace.replace(/^---(\s*?.*?)*?---/, newYamlContent)

    fs.writeFileSync(filename, finalNewContent)

    if (path.basename(filename) === 'README.md') {
      var newName = path.join(path.dirname(filename), 'index.md')
      fs.renameSync(filename, newName, function (err) {
        if (err) {
          callBack(err)
        }
      })
    }
    next()
  },
    function (err, files) {
      if (err) {
        callBack(err)
      }
      callBack && callBack(null, files)
    }
  )
}

function fixYamlContent (content, filename) {
  // fix links for website
  var fixedContent = content.replace(/([0-9]{2})-/g, '').replace(/.md\)/g, ')')
  // fix Yaml frontmatter
  fixedContent = fixedContent.replace('<!--', '---').replace('-->', '---')
  // replace /README)
  fixedContent = fixedContent.replace(/\/README\)/g, ')')
  // fix paths of links that are not index.md('README.md')
  if (path.basename(filename) !== 'README.md') {
    // replace (.. with (../..
    fixedContent = fixedContent.replace(/\(\.\./g, '(../..')
    // replace (./ with (../
    fixedContent = fixedContent.replace(/\(\.\//g, '(../')
  }
  return fixedContent
}
