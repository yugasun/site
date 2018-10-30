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
    return `https://github.com/serverless/examples/tree/master/${folderName}` //TODO: in config file
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
    const uppercaseWords = ["Http", "Rest", "Api", "Iot"]
    const brandWords = {
        dynamodb: 'DynamoDB',
        faunadb: 'FaunaDB',
        pynamodb: 'PynamoDB',
        mongodb: 'MongoDB',
        oauth: 'OAuth',
        sns: 'SNS',
        ses: 'SES',
        graphql: 'GraphQL'
    }
    formattedTitle.split(' ').forEach(word => {
        const wordInLowercase = word.toLowerCase()

        if(brandWords[wordInLowercase]) {
            finalTitle += ` ${brandWords[wordInLowercase]}`
        } else if(uppercaseWords.includes(word)) {
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

function makePlatformSEOName(title, platform) {
    let platformSEOName
    let appendExample = title.includes('Example') ? '' : ' Example'
    switch (platform) {
        case 'AWS':
            platformSEOName = `AWS Lambda Function${appendExample}`
            break
        case 'Google Cloud':
            platformSEOName = `Google Cloud Functions${appendExample}`
            break
        case 'Azure':
            platformSEOName = `Azure Functions${appendExample}`
            break
        default:
            platformSEOName = `${platform} Function${appendExample}`
            break
    }

    return platformSEOName
}

function makeSEOTitle(title, platformSEOName, language) {
    let seoTitle = `${title} | ${platformSEOName} in ${language}`
    return seoTitle
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
            item.platformSEOName = makePlatformSEOName(item.title, item.platform)
            item.seoTitle = makeSEOTitle(item.title, item.platformSEOName, item.language)
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