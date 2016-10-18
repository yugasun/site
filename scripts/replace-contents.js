/**
  Script for autogenerating indexes
 */
var fs = require('fs')
var path = require('path')

function parseOptions (options) {
  var returnOptions = {}
  options.split('&').map(function (opt, i) {
    var getValues = opt.split('=')
    if (getValues[0] && getValues[1]) {
      returnOptions[getValues[0]] = getValues[1]
    }
  })
  return returnOptions
}

var commands = {
  CODE: function (opts) {
    console.log('lololol', opts)
    var codeOptions = parseOptions(opts)
    var syntax = codeOptions.syntax
    console.log(codeOptions)
    var contents = path.join(__dirname, codeOptions.src)
    var newContents = fs.readFileSync(contents, 'utf8', function (err, contents) {
      if (err) {
        console.log(err)
      }
      return contents
    })
    if (!syntax) {
      var syntax = path.extname(contents).replace(/^./, '')
    }

    return `\`\`\`${syntax}

${newContents}
\`\`\``
  }
}

var test = path.join(__dirname, 'replace-contents-test.md')
var what = fs.readFileSync(test, 'utf8', function (err, contents) {
  if (err) {

  }
  return contents
})

function stripContentTags (content, pattern) {
  return content.replace(pattern, '')
}
// AUTO-GENERATED-CONTENT
// GITHUB-ONLY-CONTENT
function injectContentInBetweenComments (previousContent, newContent) {
  // console.log('what', previousContent)
  var tagToLookFor = '<!-- AUTO-GENERATED-CONTENT:'
  var closingTag = '-->'
  var startOpeningTagIndex = previousContent.indexOf(tagToLookFor + 'START');
  var endOpeningTagIndex = previousContent.indexOf(closingTag, startOpeningTagIndex);
  var startClosingTagIndex = previousContent.indexOf(tagToLookFor + 'END', endOpeningTagIndex);
  if (startOpeningTagIndex === -1 ||
    endOpeningTagIndex === -1 ||
    startClosingTagIndex === -1) {
    console.log('no match found')
    return previousContent
  }
  var before = previousContent.slice(startOpeningTagIndex + tagToLookFor.length, endOpeningTagIndex + closingTag.length)
  console.log(before)
  var hasOptions = previousContent.slice(startOpeningTagIndex + tagToLookFor.length, endOpeningTagIndex + closingTag.length).match(/\((.*)\)/)
  if (hasOptions && hasOptions[1]) {
    var values = hasOptions[1].split(':')
    // grab command
    var cmd = values[0]
    var cmdOptions = values[1]
    if (cmd && commands[cmd]) {
      var lol = commands[cmd](cmdOptions)
      console.log('return', lol)
      newContent = lol
    }
  }

  //return false
  /*var clean = options.replace('START:CODE:', '').split(' ')
  console.log('clean', clean[0])
  if (clean[0]) {
    var contents = path.join(__dirname, clean[0])
    var newCOntents = fs.readFileSync(contents, 'utf8', function (err, contents) {
      if (err) {
        console.log(err)
      }
      return contents
    })
  }*/
  var content = previousContent.slice(endOpeningTagIndex + closingTag.length, startClosingTagIndex)
  // console.log('oldContent', content)
  /* for future use
  if (content && content.match(/KEEP-THIS/)) {
    // <!-- KEEP-THIS:START -->
    console.log('KEEEP')
  }
  */

  return previousContent.slice(0, endOpeningTagIndex + closingTag.length) +
      '\n' +
      newContent +
      // newCOntents +
      '\n' +
      previousContent.slice(startClosingTagIndex)
}

function generate (fileContent, replaceWith) {
  return injectContentInBetweenComments(fileContent, replaceWith)
}

var githubRegex = /\<\!--.*GITHUB-ONLY-CONTENT:START((.|\n)*?END.*--\>)/g
var blankLineRegex = /^\s*\n/gm
var stripGithubSpecificContent = stripContentTags(what, githubRegex)
var replaceBlankLines = stripGithubSpecificContent.replace(blankLineRegex, '\n')

var newTest = generate(replaceBlankLines, 'lololol')
//var newTest = generate('AUTO-GENERATED-CONTENT', what, 'lololol')
 console.log('new file', newTest)
