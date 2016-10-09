var fs = require('fs-extra')
var dir = require('node-dir')
var matter = require('gray-matter')
var jsonToYaml = require('yamljs')
var grabDateRegex = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/g

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
    } else {
      // if no date yaml defined, use filename
      var date = filename.match(grabDateRegex)
      if (date) {
        item.date = date[0]
      }
    }
    var yaml = jsonToYaml.stringify(item)
    // regex patterns to match frontmatter
    // ---(\s*?.*?)*?---
    // ^(---)(\s*?.*?)*?(---)
    // ^---(\s*?.*?)*?---
    var newYamlContent = `---
${yaml}---`

    var finalNewContent = content.replace(/^---(\s*?.*?)*?---/, newYamlContent)

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

function formatDate (date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-')
}
