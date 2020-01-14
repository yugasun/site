const dir = require('node-dir')
const fs = require('fs-extra')
const jsonToYaml = require('yamljs')
const matter = require('gray-matter')
const path = require('path')
const _ = require('lodash')
let featuredComponents

function isFileFeatured(repoUrl) {
  if (featuredComponents.includes(repoUrl)) {
    return true
  } else {
    return false
  }
}

function fixYamlContent(content, filename, gitLink) {
  // fix links for website
  // let fixedContent = content.replace(/([0-9]{2})-/g, '')
  let fixedContent = content

  //convert relative path to absolute github path
  fixedContent = fixedContent.replace(/]\((?:(?!http|#))/g, `](${gitLink}/blob/master/`)

  //HTTP -> HTTPS for serverless links
  fixedContent = fixedContent.replace("http://www.serverless.com", "https://www.serverless.com")

  // fix Yaml frontmatter
  fixedContent = fixedContent.replace('<!--', '---').replace('-->', '---')

  //replace v3 badge to HTTPs version (resolve mixed content issue)
  fixedContent = fixedContent.replace("http://public.serverless.com/badges/v3.svg", "https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/plugins/sls-v3-badge.svg")

  //tmp LICENSE fixes
  fixedContent = fixedContent.replace("[link-license]: ./blob/master/LICENSE", `[link-license]: ${gitLink}/blob/master/LICENSE`)

  fixedContent = fixedContent.replace("[link-license]: ./LICENSE", `[link-license]: ${gitLink}/blob/master/LICENSE`)

  fixedContent = fixedContent.replace("[link-license]: ./LICENSE.txt", `[link-license]: ${gitLink}/blob/master/LICENSE.txt`)

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

function makeSEOTitle(title) {
  let seoTitle = `${title}`
  return seoTitle
}

function getAuthorName(repoUrl) {
  return repoUrl.replace('https://github.com/', '').split('/')[0]
}

function getAuthorLink(repoUrl) {
  const authorName = getAuthorName(repoUrl)
  return `https://github.com/${authorName}`
}

function formatTitle(title) {
  let formattedTitle = ''
  const uppercaseWords = [
    'Aws',
    'Http',
    'Rest',
    'Api',
    'Iot',
    'Sam',
    'Sns',
    'Ses',
    'Iam',
    'Es',
    'Cf',
    'Waf',
    'Raml',
    'Wsgi',
    'Vpc',
    'Ssm',
    'Kms',
    'Sqs',
    'Ttl',
    'Spa',
    'Sdk',
  ]
  const brandWords = {
    dynamodb: 'DynamoDB',
    faunadb: 'FaunaDB',
    pynamodb: 'PynamoDB',
    mongodb: 'MongoDB',
    oauth: 'OAuth',
    graphql: 'GraphQL',
    iopipe: 'IOpipe',
    graphiql: 'GraphiQL',
  }
  title.split(' ').forEach(word => {
    const wordInLowercase = word.toLowerCase()

    if (brandWords[wordInLowercase]) {
      formattedTitle += ` ${brandWords[wordInLowercase]}`
    } else if (uppercaseWords.includes(word)) {
      formattedTitle += ` ${word.toUpperCase()}`
    } else {
      formattedTitle += ` ${word}`
    }
  })
  formattedTitle = formattedTitle.replace('S 3', 'S3')
  formattedTitle = formattedTitle.replace('Sthree', 'S3')

  formattedTitle = formattedTitle.trim()
  return formattedTitle
}

module.exports = function updateComponentsContent(
  rawComponentsData,
  componentsDirectoryPath,
  callback
) {
  featuredComponents = _.map(
    _.orderBy(rawComponentsData, ['npmDownloads'], ['desc']).splice(0, 15),
    'repoUrl'
  )
  dir.readFiles(
    componentsDirectoryPath,
    {
      match: /.md$/,
    },
    (err, content, filename, next) => {
      if (err) console.error(err)
      const componentName = path.parse(filename).base.replace('.md', '')
      const componentMetaData = rawComponentsData.filter(obj => {
        if (obj.repoUrl.endsWith(componentName)) {
          return true
        } else {
          return false
        }
      })[0]
      const fixedContent = fixYamlContent(content, filename, componentMetaData.repoUrl)
      const item = matter(fixedContent).data
      item.avatar = componentMetaData.avatar
      item.title = formatTitle(_.startCase(componentName))
      item.description = componentMetaData.description
      item.gitLink = componentMetaData.repoUrl
      item.npmDownloads = componentMetaData.npmDownloads
      item.githubStars = componentMetaData.githubStars
      item.status = componentMetaData.status
      item.authorName = getAuthorName(item.gitLink)
      item.authorLink = getAuthorLink(item.gitLink)
      item.seoTitle = makeSEOTitle(item.title)
      if (isFileFeatured(componentMetaData.repoUrl)) {
        item.highlighted = true
      }

      const yaml = jsonToYaml.stringify(item)
      const newYamlContent = `---
${yaml}---`

      const finalNewContent = `${newYamlContent}
${fixedContent}`

      fs.writeFileSync(filename, finalNewContent)

      next()
    },
    function(err) {
      if (err) {
        callback(err)
      } else {
        callback(null)
      }
    }
  )
}
