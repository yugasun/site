/**
 * This script adds header links to the docs in the serverless github repo
 */
const fs = require('fs-extra')
var path = require('path')
var dir = require('node-dir')

const localdocsPath = path.join(__dirname, '..', '..', '..', '/serverless/docs/')
console.log('localdocsPath', localdocsPath)
// const pathToSLSRepo = path.join()

const link = (location) => {
  return `
<!-- DOCS-SITE-LINK:START automatically generated  -->
### [Read this on the main serverless docs site](https://www.serverless.com${location})
<!-- DOCS-SITE-LINK:END -->`
}

var callBack

dir.readFiles(localdocsPath, {
  match: /.md$/,
  //exclude: /^\./
}, function (err, content, filename, next) {
  if (err) throw err
  var removeLinkRegex = /<!--.*DOCS-SITE-LINK:START((.|\n)*?END.*-->)/g
  var removeExisting = content.replace(removeLinkRegex, '')
  var blankLineRegex = /^\s*\n/gm
  var replaceBlankLines = removeExisting.replace(blankLineRegex, '\n')
  var sitePath = filename.split('/serverless/docs/')[1].replace('.md', '').replace('README', '')
  var siteDocLink = link('/docs/' + sitePath)
  var addLink = replaceBlankLines.replace(/(<!--.*(.|\n)*?.*-->)/, '$1' + '\n' + siteDocLink)
  console.log('/docs/' + sitePath + ' updated with link')
  // console.log('replace', addLink)
  fs.writeFileSync(filename, addLink)

  next()
},
  function (err, files) {
    if (err) {
      callBack && callBack(err)
    }
    callBack && callBack(null, files)
  }
)
