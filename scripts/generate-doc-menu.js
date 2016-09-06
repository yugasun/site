var dir = require('node-dir')
var fs = require('fs-extra')
var path = require('path')
var destPath = path.join(__dirname, '..', 'content')

getAllSiteUrls(destPath, function (filePaths) {
  getAllSiteDirectories(destPath, filePaths, function (final) {
    console.log('final', final.sort())
  })
})

function getAllSiteUrls (filePath, next) {
  dir.readFiles(filePath, {
    match: /.md$/,
    exclude: /^\./
  }, function (err, content, next) {
    if (err) throw err
    next()
  },
    function (err, files) {
      if (err) throw err
      var filePaths = files.filter(function (file) {
        return !isHiddenFile(file)
      }).sort()
      .map(function (file, i) {
        return cleanPath(file)
      })
      next && next(filePaths)
    }
  )
}

function getAllSiteDirectories (filePath, filePaths, next) {
  var what = dir.subdirs(filePath, function (err, subdirs) {
    if (err) {
      throw err
    }
    var directoryPaths = subdirs.map(function (dir, i) {
      return cleanPath(dir)
    })
    var final = directoryPaths.concat(filePaths)
    next && next(final)
  })
}

function cleanPath (filePath) {
  return filePath.split('content')[1]
}
function isHiddenFile (fileName) {
  return path.basename(fileName).match(/^\./)
}

function diretoryTreeToObj (dir, done) {
  var results = []

  fs.readdir(dir, function (err, list) {
    if (err)
      return done(err)

    var pending = list.length

    if (!pending)
      return done(null, {name: path.basename(dir), type: 'folder', children: results})

    list.forEach(function (file) {
      file = path.resolve(dir, file)
      fs.stat(file, function (err, stat) {
        if (stat && stat.isDirectory()) {
          diretoryTreeToObj(file, function (err, res) {
            results.push({
              name: path.basename(file),
              type: 'folder',
              children: res
            })
            if (!--pending)
              done(null, results)
          })
        }
        else {
          results.push({
            type: 'file',
            name: path.basename(file)
          })
          if (!--pending)
            done(null, results)
        }
      })
    })
  })
}
diretoryTreeToObj(destPath, function (err, res) {
  if (err)
    console.error(err)

  console.log(JSON.stringify(res))
})

var dirTree = require('directory-tree')
var filteredTree = dirTree(destPath, ['.md'])

setTimeout(function () {
      // console.log(JSON.stringify(filteredTree))
  var test = JSON.stringify(filteredTree)
  console.log(typeof filteredTree)
  var what = traverse(filteredTree, 'one')
  return false
  fs.writeFileSync(path.join(__dirname, 'test.json'), what)
}, 300)

function traverse(x, level) {
  if (isArray(x)) {
    traverseArray(x, level);
  } else if ((typeof x === 'object') && (x !== null)) {
    traverseObject(x, level);
  } else {
    console.log(level + x);
  }
}

function isArray(o) {
  return Object.prototype.toString.call(o) === '[object Array]';
}

function traverseArray(arr, level) {
  console.log(level + "<array>");
  arr.forEach(function(x) {
    traverse(x, level + "  ");
  });
}

function traverseObject(obj, level) {
  console.log(level + "<object>");

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(level + "  " + key + ":");
      traverse(obj[key], level + "    ");
    }
  }

  if (obj.hasOwnProperty('children')) {
    console.log(obj['children'])
    traverse(obj['children'], level + "    ");
  }
}
