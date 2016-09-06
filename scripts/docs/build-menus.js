var config = require('./config')
var dirTree = require('directory-tree')
var filteredTree = dirTree(config.newDocsPath, ['.md'])
var path = require('path')
var fs = require('fs-extra')
var matter = require('gray-matter')

var count = 1
var level = 1
//console.log('filteredTree', filteredTree)
module.exports = function buildMenus () {
  traverse(filteredTree, 1)
}

function traverse (x) {
  if (isArray(x)) {
    processChildrenArray(x)
  } else if ((typeof x === 'object') && (x !== null)) {
    processChildren(x)
  } else {
    console.log(count)
  }
}

function isArray (o) {
  return Object.prototype.toString.call(o) === '[object Array]'
}

function processChildrenArray (arr) {
  //console.log(level + '<array>')
  arr.forEach(function (x) {
    //console.log(x.path)
    count = count + 1
    traverse(x)
  })
}

function processChildren (obj) {
  if (obj.hasOwnProperty('children')) {
    //console.log('level', level)
    var filePath = obj['path']
    // console.log('path', filePath)
    var subPaths = []
    obj['children'].forEach(function (x, i) {
      if (fs.lstatSync(x.path).isDirectory()) {
        var fullPath = x.path
        var url = fullPath.split('content')[1].replace('index', '').replace('.md', '')
        subPaths[i] = {
            title: path.basename(x.path),
            url: url
        }
      } else {
        var content = fs.readFileSync(x.path).toString()
        // parse yaml frontmatter for title
        var yamlInfo = matter(content).data
        var arrayItem = {
          title: yamlInfo.title,
          url: x.path
        }
        subPaths[i] = arrayItem
      }
    })
    writeJSONMenuToDirectory(filePath, JSON.stringify(subPaths))
    //console.log(obj['children'])
    traverse(obj['children'], filePath)
    level = level + 1
  }
}


function writeJSONMenuToDirectory (dest, contents) {
  // var finalDest = dest.replace('content/framework', 'dist/framework')
  var p = path.join(dest, 'menu.json')
  console.log(p)
  fs.writeFileSync(p, contents, 'utf-8', function (err) {
    if (err) {
      return console.log(err)
    }
    console.log(dest + '/menu.js file generated')
  })
}
