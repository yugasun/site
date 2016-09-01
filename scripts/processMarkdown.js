var dir = require('node-dir')
var fs = require('fs-extra')
var path = require('path')
var matter = require('gray-matter')
var docPath = path.join(__dirname, '..', 'content/framework/docs/')
var docsrcPath = path.join(__dirname, '..', 'node_modules/serverless/docs/')

/*
For blog regex
https://raw.githubusercontent.com/auth0/blog/master/_posts/2016-08-31-stateless-auth-for-stateful-minds.markdown
https://regex101.com/r/gM1kI7/1
/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]$/
 */

function moveDocs(cb) {
  fs.emptyDir(docPath, function (err) {
    if (err) {
      console.log('emptyDir fail!')
    }
    console.log('Docs folder emptied!')
    fs.copy(docsrcPath, docPath, function (err) {
      if (err) return console.error(err)
      console.log("Docs successfully moved!")
      cb()
    });
  })
}

/* replace first comment in markdown file */
function replaceTitleYaml (content) {
  var newContent = content.replace('<!--', '---')
  var fixLinks = newContent.replace(/([0-9]{2})-/g, '').replace(/.md\)/g, ')')
  var finalContent = fixLinks.replace('-->', '---')
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

    var replace = replaceTitleYaml(content)
    writeBackToFile(filename, replace, next)
    if (path.basename(filename) === 'README.md') {
      var newName = path.join(path.dirname(filename), 'index.md')
      fs.renameSync(filename, newName, function (err) {
        if (err) throw err;
        console.log('renamed complete');
      });
    }
  },
    function (err, files) {
      if (err) throw err
      console.log('finished reading files:', files)
      // TODO generate full index here
      //var menuJson = generateFullDirectoryMenu(files)
      //writeJSONMenuToDirectory (docPath, JSON.stringify(menuJson))
    }
  )
}


function getSubDirectories (filePath, cb) {
  var test = dir.subdirs(filePath, function (err, subdirs) {
    if (err) throw err

    var subDirectories = subdirs.filter(function (x) {
      return !x.match(/([0-9]{2})-/g)
    })
    cb(subDirectories)
  })
}

function writeJSONMenuToDirectory (dest, contents) {
  console.log('contents', contents)
  var p = path.join(dest, 'menu.json')
  console.log(p)

  fs.writeFileSync(p, contents, 'utf-8', function (err) {
    if (err) {
      return console.log(err)
    }
    console.log(dest + '/menu.js file generated')
  })
}

function generateFullDirectoryMenu (directory) {
  var fileList = fs.readdirSync(directory).filter(function (x) {
    return x !== '.DS_Store' && x !== 'index.js'
  })

  var menuJSON = fileList.map(function (file, i) {
    var fullPath = path.join(directory, file)
    var url = fullPath.split('content')[1].replace('index', '').replace('.md', '')
    if (fs.lstatSync(fullPath).isDirectory()) {
      // top level dir
      return {
        title: path.basename(fullPath),
        url: url
      }
    }

    var content = fs.readFileSync(fullPath).toString()
    // parse yaml frontmatter for title
    var item = matter(content).data
    // remove 'index' and '.md' from urls
    item.url = url
    return item
  })
  if (menuJSON.length > 0) {
    writeJSONMenuToDirectory(directory, JSON.stringify(menuJSON))
  }

  return menuJSON
}

function generateSubFolderMenus (filePath) {
  var menuItems = fs.readdirSync(filePath)
  // TODO generate json menu
}

function deleteOldFolders (filePath) {
  dir.subdirs(filePath, function (err, subdirs) {
    if (err) {
      throw err
    }
    subdirs.filter(function (x) {
      return x.match(/([0-9]{2})-/g)
    }).forEach(function (dir) {
      fs.removeSync(dir, function (err) {
        if (!err) console.log('success!')
      })
    })
  })
}

function renameAllFiles (filePath) {
  dir.files(filePath, function (err, files) {
    if (err) {
      throw err
    }
    files.forEach(function (name) {
      var newName = name.replace(/([0-9]{2})-/g, '')
      fs.copy(name, newName, function (err) {
        if (err) {
          console.log('name', name)
          return console.error(err)
        }
      })
    })
  })
}


function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
  generateSubFolderMenus(element)
}

moveDocs(function() {


  setTimeout(function() {
    renameAllFiles(docPath)
  }, 1300);

  setTimeout(function() {
    deleteOldFolders(docPath)
  }, 2300);

  setTimeout(function() {
    processMarkdown(docPath)
  }, 3000);
  setTimeout(function() {
    var test = getSubDirectories(docPath, function(dirs) {
      console.log('dirs', dirs)
      dirs.forEach(function(dir) {
        console.log(generateFullDirectoryMenu (dir))
      })
    })
  }, 4000);


})
