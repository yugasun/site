var config = require('./config')
var dirTree = require('directory-tree')
// var breakWord = 'serverless'
var filteredTree = dirTree(config.newDocsPath, ['.md'])
var breakWord = 'content'
var path = require('path')
var fs = require('fs-extra')
var matter = require('gray-matter')
var menuObject = {} // menu generated

// Make map of top level directories to order them
var folderLookup = {}
var folderList = fs.readdirSync(config.oldDocsPath).filter(function (x) {
  return x !== '.DS_Store' && !x.match(/\.md/)
}).map(function (folder, i) {
  var order = folder.match(/([0-9]{2})/g)
  if (order) {
    var orderNumber = order.length
    if (order && order.length) {
      orderNumber = parseInt(order[order.length - 1])
    }
    folderLookup[folder.replace(/([0-9]{2})-/g, '')] = orderNumber
  }
})
// end make map

function getPageData (filePath) {
  var pageData
  if (fs.lstatSync(filePath).isDirectory()) {
    var name = path.basename(filePath)
    pageData = {
      title: name,
      order: 0
    }
  } else {
    var content = fs.readFileSync(filePath).toString()
    // parse yaml frontmatter for title
    var yamlInfo = matter(content).data
    console.log('yamlInfo', yamlInfo)
    // get order of original file
    var originalLink = yamlInfo.gitLink
    var order = originalLink.match(/([0-9]{2})/g)
    var orderNumber = folderList.length + 1 // set none order md to last
    if (order && order.length) {
      orderNumber = parseInt(order[order.length - 1])
    }

    //var o = (yamlInfo.menuOrder) ? yamlInfo.menuOrder : orderNumber

    pageData = {
      title: yamlInfo.menuText || yamlInfo.title,
      order: yamlInfo.menuOrder // previously orderNumber
    }
  }
  return pageData
}

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function generateSubPaths (arr) {
  var pages = []
  var indexPage = []
  for (var i = 0; i < arr.length; i++) {
    var pageInfo = getPageData(arr[i].path)
    var pathName = arr[i].path.split(breakWord)[1].replace('.md', '')
    if (path.basename(arr[i].path, '.md') === 'index') {
      indexPage.push({
        path: pathName,
        title: capitalizeFirstLetter(pageInfo.title.replace(/-/g, ' ')),
        order: pageInfo.order,
      })
    } else {
      var item = {
        path: pathName,
        title: capitalizeFirstLetter(pageInfo.title.replace(/-/g, ' ')),
        order: pageInfo.order,
      }
      pages.push(item)
    }
  }

  // filter pages and order based on git link and remove
  var sortedPages = pages.sort(function (a, b) {
    if (a.order > b.order) {
      return 1
    }
    if (a.order < b.order) {
      return -1
    }
    // a must be equal to b
    return 0
  })

  return {
    pages: sortedPages,
    indexPage: indexPage
  }
}

var level = 0

function traverse (x) {
  // console.log('x', x)
  if (isArray(x)) {
    processChildrenArray(x)
  } else if ((typeof x === 'object') && (x !== null)) {
    processChildren(x)
  } else {
    // nil
    // console.log('NIL', x)
  }
}

function isArray (o) {
  return Object.prototype.toString.call(o) === '[object Array]'
}

function processChildrenArray (arr) {
  arr.forEach(function (x) {
    traverse(x)
  })
}

function processChildren (obj) {
  if (obj.hasOwnProperty('children')) {
    var filePath = obj['path'].split(breakWord)[1]
    menuObject[filePath] = {
      index: generateSubPaths(obj['children']).indexPage,
      children: generateSubPaths(obj['children']).pages
    }
    traverse(obj['children'])
    level = level + 1
  }
}

function writeJSONMenuToDirectory (dest, contents) {
  var p = path.join(dest, 'generated-menu.js')
  var finalContents = 'module.exports = ' + JSON.stringify(contents, null, 2)
  fs.writeFileSync(p, finalContents, 'utf-8', function (err) {
    if (err) {
      return console.log(err)
    }
    console.log(dest + '/generated-menu.js Docs file generated')
  })
}

module.exports = function generateDocMenu () {
  // kick off menu creation. sync process
  traverse(filteredTree, 1)
  // then write to file
  writeJSONMenuToDirectory(config.docsMenuPath, menuObject)
}
