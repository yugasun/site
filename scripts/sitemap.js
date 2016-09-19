/**
 * Generates sitemap
 */
var fs = require('fs-extra')
var dir = require('node-dir')
var sm = require('sitemap')
var path = require('path')
var packageInfo = require('../package.json')
var distPath = path.join(__dirname, '..', 'dist')
var sitemapPath = path.join(__dirname, '..', 'dist', 'sitemap.xml')

function getAllUrls (filePath, callBack) {
  dir.readFiles(filePath, {
    match: /.html$/,
    //exclude: /^\./
  }, function (err, content, filename, next) {
    if (err) throw err
    next()
  },
    function (err, files) {
      if (err) {
        callBack(err)
      }
      var urls = files.map(function (file, i) {
        return {
          url: path.dirname(file.split('dist')[1]),
          changefreq: 'weekly',
          priority: 0.8,
          lastmodrealtime: true,
          lastmodfile: file
        }
      })
      callBack && callBack(null, urls)
    }
  )
}

getAllUrls(distPath, function (err, urls) {
  if (err) {
    console.log(err)
    return false
  }
  var options = {
    hostname: packageInfo.homepage + '/',
    cacheTime: 600000,  // 600 sec cache period
    urls: urls
  }
  // Creates a sitemap object given the input configuration with URLs
  var sitemap = sm.createSitemap(options)
  // Generates XML with a callback function
  sitemap.toXML(function (err, xml) {
    if (!err) {
      // console.log(xml)
    }
  })
  // Gives you a string containing the XML data
  var xml = sitemap.toString()
  // write sitemap to file
  fs.writeFileSync(sitemapPath, xml, 'utf-8', function (err) {
    if (err) {
      return console.log(err)
    }
    console.log('Sitemap Built!')
  })
})
