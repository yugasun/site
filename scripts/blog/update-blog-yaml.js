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
  
    // parse yaml frontmatter for title
    var item = matter(content).data

    item.gitLink = filename.split('blog')[1]
    if (item.date) {
      item.date = formatDate(item.date)
    }
    var what = jsonToYaml.stringify(item)
    // regex patterns to match frontmatter
    // ---(\s*?.*?)*?---
    // ^(---)(\s*?.*?)*?(---)
    // ^---(\s*?.*?)*?---
    var newYamlContent = `---
${what}---`

    var finalNewContent = content.replace(/^---(\s*?.*?)*?---/, newYamlContent)

    // writeBackToFile(filename, replace, next)
    fs.writeFileSync(filename, finalNewContent)

    next()
  },
    function (err, files) {
      if (err) {
        callBack(err)
      }
      callBack && callBack(null)
    }
  )
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
