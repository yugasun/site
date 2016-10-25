/**
  Script for autogenerating indexes
 */
const fs = require('fs')
const path = require('path')

function parseOptions(options) {
  const returnOptions = {}
  options.split('&').map((opt, i) => {
    const getValues = opt.split('=')
    if (getValues[0] && getValues[1]) {
      returnOptions[getValues[0]] = getValues[1]
    }
  })
  return returnOptions
}

const commands = {
  CODE(opts) {
    console.log('lololol', opts)
    const codeOptions = parseOptions(opts)
    var syntax = codeOptions.syntax
    console.log(codeOptions)
    const contents = path.join(__dirname, codeOptions.src)
    const newContents = fs.readFileSync(contents, 'utf8', (err, contents) => {
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

const test = path.join(__dirname, 'replace-contents-test.md')
const what = fs.readFileSync(test, 'utf8', (err, contents) => {
  if (err) {

  }
  return contents
})

function stripContentTags(content, pattern) {
  return content.replace(pattern, '')
}
// AUTO-GENERATED-CONTENT
// GITHUB-ONLY-CONTENT
function injectContentInBetweenComments(previousContent, newContent) {
  // console.log('what', previousContent)
  const tagToLookFor = '<!-- AUTO-GENERATED-CONTENT:'
  const closingTag = '-->'
  const startOpeningTagIndex = previousContent.indexOf(`${tagToLookFor}START`)
  const endOpeningTagIndex = previousContent.indexOf(closingTag, startOpeningTagIndex)
  const startClosingTagIndex = previousContent.indexOf(`${tagToLookFor}END`, endOpeningTagIndex)
  if (startOpeningTagIndex === -1 ||
    endOpeningTagIndex === -1 ||
    startClosingTagIndex === -1) {
    console.log('no match found')
    return previousContent
  }
  const before = previousContent.slice(startOpeningTagIndex + tagToLookFor.length, endOpeningTagIndex + closingTag.length)
  console.log(before)
  const hasOptions = previousContent.slice(startOpeningTagIndex + tagToLookFor.length, endOpeningTagIndex + closingTag.length).match(/\((.*)\)/)
  if (hasOptions && hasOptions[1]) {
    const values = hasOptions[1].split(':')
    // grab command
    const cmd = values[0]
    const cmdOptions = values[1]
    if (cmd && commands[cmd]) {
      const lol = commands[cmd](cmdOptions)
      console.log('return', lol)
      newContent = lol
    }
  }

  // return false
  /* var clean = options.replace('START:CODE:', '').split(' ')
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
  const content = previousContent.slice(endOpeningTagIndex + closingTag.length, startClosingTagIndex)
  // console.log('oldContent', content)
  /* for future use
  if (content && content.match(/KEEP-THIS/)) {
    // <!-- KEEP-THIS:START -->
    console.log('KEEEP')
  }
  */

  return `${previousContent.slice(0, endOpeningTagIndex + closingTag.length)
      }\n${
      newContent
      // newCOntents +
      }\n${
      previousContent.slice(startClosingTagIndex)}`
}

function generate(fileContent, replaceWith) {
  return injectContentInBetweenComments(fileContent, replaceWith)
}

const githubRegex = /\<\!--.*GITHUB-ONLY-CONTENT:START((.|\n)*?END.*--\>)/g
const blankLineRegex = /^\s*\n/gm
const stripGithubSpecificContent = stripContentTags(what, githubRegex)
const replaceBlankLines = stripGithubSpecificContent.replace(blankLineRegex, '\n')

const newTest = generate(replaceBlankLines, 'lololol')
// var newTest = generate('AUTO-GENERATED-CONTENT', what, 'lololol')
console.log('new file', newTest)
