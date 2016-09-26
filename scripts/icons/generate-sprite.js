var fs = require('fs-extra')
var path = require('path')
var parse = require('htmlparser2')
var jade = require('jade')
var spriteTemplate = path.join(__dirname, 'templates', 'layout.jade')
var _ = require('lodash')

module.exports = function buildSprite (filePath, files, cb) {
  var data = {
    svg: {
      xmlns: 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      style: 'position:absolute; width: 0; height: 0'
    },
    defs: [],
    symbols: []
  }
  // each over files
  files.forEach(function (file) {
    var fpath = path.join(filePath, file)
    // load and minify
    var buffer = fs.readFileSync(fpath, 'utf8')
    // get filename for id generation
    var filename = path.basename(fpath, '.svg')
    var handler = new parse.DomHandler(function (error, dom) {
      if (error) {
        console.log(error)
      }
      _parseDomObject(data, filename, dom, 'sls-icon-')
    })

    // lets create parser instance
    var Parser = new parse.Parser(handler, {
      xmlMode: true
    })
    Parser.write(buffer)
    Parser.end()
  })
  // console.log('Final', data)
  var spriteContents = _createSprite(data)

  // TODO expose this as option
  var svgs = path.join(__dirname, '..', '..', 'src', 'assets', 'icons')
  var spriteDestinationPath = path.join(svgs, 'sprite.svg')
  var jsDestinationPath = path.join(svgs, 'sprite.js')
  fs.writeFile(spriteDestinationPath, spriteContents, 'utf8', function () {
    console.log('sprite.svg Build DONE')
    var prefix = 'module.exports =  \`'
    var postfix = '\`;\n'
    const combinedCode = prefix + spriteContents + postfix
    fs.writeFile(jsDestinationPath, combinedCode, function (err) {
      if (err) {
        return console.log(err)
      }
      console.log('The sprite.js was generated!')
      cb(null)
    })
  })
}

var _createSprite = function (data) {
  return jade.renderFile(spriteTemplate, data)
}

var _parseDomObject = function (data, filename, dom, prefix) {
  var id = _convertFilenameToId(filename)
  if (dom && dom[0]) {
    _defs(id, dom[0], data.defs)
    _symbols(id, dom[0], data.symbols, prefix)
  }

  return data
}

var _convertFilenameToId = function (filename) {
  var _name = filename
  var dotPos = filename.indexOf('.')
  if (dotPos > -1) {
    _name = filename.substring(0, dotPos)
  }
  return _name
}

var _defs = function (id, dom, data) {
  // lets find defs into dom
  var defs = _.filter(dom.children, { name: 'defs' })
  // check childrens
  defs.forEach(function (item) {
    if (item.children && item.children.length > 0) {
      // mutable attribute
      item.children.forEach(function (_data) {
        _data.attribs.id = [id, _data.attribs.id || 'icon-id'].join('-')
        data.push(_data)
      })
    }
  })

  return data
}

var _symbols = function (id, dom, data, prefix) {
  // create symbol object
  var symbol = {
    type: 'tag',
    name: 'symbol',
    attribs: {
      viewBox: dom.attribs.viewBox,
      id: prefix + id,
      class: dom.attribs.class,
    },
    next: null,
    prev: null,
    parent: null
  }

  // add dom children without defs and titles
  symbol.children = _.filter(dom.children, function (obj) {
    return obj.name !== 'defs' && obj.name !== 'title'
  })

  // go through the svg element
  _parseSVG(symbol.children, id)

  // push symbol data
  data.push(symbol)

  return data
}

var _parseSVG = function (arr, id) {
  var data = []
  arr.forEach(function (obj, i) {
    if (obj) {
      // console.log('obj', obj)
      // add unic ids to urls
      _fixUrls(obj, id)
      // add ids
      _fixIds(obj, id)
      // add classes for customization
      _addPathClasses(obj, id, i)
      // go deeper if children exists
      if (obj.children && obj.children.length > 0) {
        _parseSVG(obj.children, id)
      }
      data.push(obj, id)
    }
  })

  return data
}

var _addPathClasses = function (obj, id, i) {
  var hasClass = (obj.attribs['class']) ? obj.attribs['class'] + ' ' : ''
  if (obj.name === 'path') {
    obj.attribs['class'] = hasClass + id + '-path-' + i
  }
  if (obj.name === 'circle') {
    var hasClass = (obj.attribs['class']) ? obj.attribs['class'] + ' ' : ''
    obj.attribs['class'] = hasClass + id + '-circle-' + i
  }
}

var _fixUrls = function (obj, id) {
  var key
  var match
  var json = obj.attribs
  if (json) {
    for (key in json) {
      if (json.hasOwnProperty(key)) {
        match = /url\(\s*#([^ ]+?)\s*\)/g.exec(json[key])
        if (key && match) {
          json[key] = 'url(#' + id + '-' + match[1] + ')'
        }
      }
    }
  }
}

var _fixIds = function (obj, id) {
  // add id
  if (obj.attribs && obj.attribs.id) {
    obj.attribs.id = [id, obj.attribs.id].join('-')
  }
  // add id to use tag
  if (obj.name === 'use') {
    obj.attribs['xlink:href'] = ['#' + id, obj.attribs['xlink:href'].replace('#', '')].join('-')
  }
}
