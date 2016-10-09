/**
 * Script to generate the sprite of icons included in project
 */
var fs = require('fs')
var path = require('path')

module.exports = function makeIconList (icons, destinationFolder) {
  var list = {}
  for (var i = 0; i < icons.length; i++) {
    var icon = icons[i]
    var name = icon.replace('.svg', '')
    console.log('name', name)
    list[name] = {
      filename: icon,
      // cdnLink: ""
    }
  }

  var iconExports = 'module.exports = ' + JSON.stringify(list, null, 2)

  fs.writeFile(destinationFolder + '/icon-list.js', iconExports, function (err) {
    if (err) {
      return console.log(err)
    }
  })
}
