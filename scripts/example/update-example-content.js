const dir = require('node-dir')
const fs = require('fs-extra')
const jsonToYaml = require('yamljs')
const matter = require('gray-matter')
const path = require('path')

const config = require('./config')
const featuredExamples = config.featuredExamples

function isFileFeatured(folderName) {
    if (featuredExamples.includes(folderName)) {
        return true
    } else {
        return false
    }
}

function makeGitLink(folderName) {
    return `https://github.com/serverless/examples/tree/master/${folderName}/README.md` //TODO: in config file
}

function makeTitle(folderName) {
    const toTitleCase = (str) => { // eslint-disable-line
        return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
    }

    const formatPluginName = (string) => { // eslint-disable-line
        return toTitleCase(string.replace(/-/g, ' '))
    }

    const seperator = '-'
    const folderNameArr = folderName.split(seperator)
    const firstTwoElementsRemoved = folderNameArr.splice(0, 2)

    const formattedTitle = formatPluginName(folderNameArr.join(seperator))
    
    //uppercase words
    let finalTitle = ""
    const uppercaseWords = ["Http", "Rest", "Api", "Sns", "Ses", "Iot"]
    formattedTitle.split(' ').forEach(word => {
        if(uppercaseWords.includes(word)) {
            finalTitle += ` ${word.toUpperCase()}`
        } else {
            finalTitle += ` ${word}`
        }
    })
    finalTitle = finalTitle.trim()

    //add filler words (for SEO and completeness)
    const totalWordCount = finalTitle.split(' ').length
    if(totalWordCount === 1) {
        finalTitle = `${finalTitle} Function Example`
    } else if (totalWordCount === 2) {
        finalTitle = `${finalTitle} Example`
    }

    return finalTitle
}

function fixYamlContent(content, filename) {
    // fix links for website
    let fixedContent = content.replace(/([0-9]{2})-/g, '').replace(/.md\)/g, ')')
    // fix Yaml frontmatter
    fixedContent = fixedContent.replace('<!--', '---').replace('-->', '---')
    // replace /README)
    fixedContent = fixedContent.replace(/\/README\)/g, ')')
    // fix paths of links that are not index.md('README.md')
    if (path.basename(filename) !== 'README.md') {
        // replace (.. with (../..
        fixedContent = fixedContent.replace(/\(\.\./g, '(../..')
        // replace (./ with (../
        fixedContent = fixedContent.replace(/\(\.\//g, '(../')
    }
    return fixedContent
}

module.exports = function updateExamplesContent(examplesDirectoryPath) {
    dir.readFiles(examplesDirectoryPath, {
            match: /.md$/
        }, (err, content, filename, next) => {
            if (err) console.error(err)
            const folderName = path.parse(filename).base.replace('.md', '')
            const fixedContent = fixYamlContent(content, filename)
            const item = matter(fixedContent).data 
            item.gitLink = makeGitLink(folderName)
            item.title = makeTitle(folderName)
            if (isFileFeatured(folderName)) {
                item.highlighted = true
            }

            const yaml = jsonToYaml.stringify(item)
            const newYamlContent = `---
${yaml}---`
            const finalNewContent = fixedContent.replace(/^---(\s*?.*?)*?---/, newYamlContent)
            fs.writeFileSync(filename, finalNewContent)
            
            next()
        },
        function (err) {
            
        })
}