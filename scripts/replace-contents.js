/**
  Script for autogenerating indexes
 */
var fs = require('fs')
var path = require('path')
var componentsPath = path.join(__dirname, '/../content/guide')
var componentsList = fs.readdirSync(componentsPath).filter(function (x) {
  return x !== '.DS_Store' && x !== 'README.MD'
})

var test = path.join(__dirname, 'replace-contents-test.md')
var what = fs.readFileSync(test, 'utf8', function (err, contents) {
  if (err) {

  }
  return contents
})

function injectListBetweenTags (previousContent, newContent) {
  var tagToLookFor = '--- AUTO-GENERATED-CONTENT:'
  var closingTag = '---'
  var startOfOpeningTagIndex = previousContent.indexOf(tagToLookFor + 'START')
  var endOfOpeningTagIndex = previousContent.indexOf(closingTag, startOfOpeningTagIndex)
  var startOfClosingTagIndex = previousContent.indexOf(tagToLookFor + 'END', endOfOpeningTagIndex)
  if (startOfOpeningTagIndex === -1 || endOfOpeningTagIndex === -1 || startOfClosingTagIndex === -1) {
    return previousContent
  }
  var between = previousContent.slice(startOfOpeningTagIndex + tagToLookFor.length, endOfOpeningTagIndex + closingTag.length)
  console.log('between', between)
  var clean = between.replace('START:CODE:', '').split(' ')
  console.log('clean', clean[0])
  if (clean[0]) {
    var contents = path.join(__dirname, clean[0])
    var newCOntents = fs.readFileSync(contents, 'utf8', function (err, contents) {
      if (err) {

      }
      return contents
    })

  }
  var oldContent = previousContent.slice(endOfOpeningTagIndex + closingTag.length, startOfClosingTagIndex)
  console.log('oldContent', oldContent)
  if( oldContent && oldContent.match(/KEEP-THIS/)) {
    console.log('KEEEP')
  }
  // TODO check if oldContent has --- KEEP-THIS:START ---

  return previousContent.slice(0, endOfOpeningTagIndex + closingTag.length) +
      //newContent +
      newCOntents +
      previousContent.slice(startOfClosingTagIndex)
}

function generate (fileContent, replaceWith) {
  return injectListBetweenTags(fileContent, replaceWith)
}

var newTest = generate(what, componentsList)
console.log('new file', newTest)
