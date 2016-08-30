var dir = require('node-dir')
var fs = require('fs')
var path = require('path')
var matter = require('gray-matter')

/* replace first comment in markdown file */
function replaceTitleYaml (content) {
  var newContent = content.replace('<!--', '---')
  var finalContent = newContent.replace('-->', '---')
  return finalContent
}

function writeBackToFile (path, content, cb) {
  fs.writeFileSync(path, content)
  cb()
}

function processMarkdown (filePath) {
  dir.readFiles(filePath, {
    match: /.md$/,
    //exclude: /^\./
  }, function (err, content, filename, next) {
    if (err) throw err
    console.log('filename', filename)
    var replace = replaceTitleYaml(content)
    writeBackToFile(filename, replace, next)
  },
    function (err, files) {
      if (err) throw err
      // console.log('finished reading files:', files)
      var menuJson = generateJSONMenus(files)
      writeJSONMenuToDirectory (docPath, JSON.stringify(menuJson))
    }
  )
}

function writeJSONMenuToDirectory (dest, contents) {
  fs.writeFile(dest + '/menu.json', contents, function (err) {
    if (err) {
      return console.log(err)
    }
    console.log(dest + '/index.js file generated')
  })
}

function generateJSONMenus (filePaths) {
  var menuJSON = filePaths.map(function (file, i) {
    var content = fs.readFileSync(file).toString()
    // parse yaml frontmatter for title
    var item = matter(content).data
    // remove 'index' and '.md' from urls
    var url = file.split('content')[1].replace('index', '').replace('.md', '')
    item.url = url
    return item
  })
  return menuJSON
}

var docPath = path.join(__dirname, '..', 'content/framework/docs/')
processMarkdown(docPath)
