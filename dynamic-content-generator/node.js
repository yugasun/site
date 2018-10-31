const path = require('path')
const crypto = require('crypto')
const dir = require('node-dir')
const matter = require('gray-matter')
const unified = require('unified')
const markdown = require('remark-parse')
const slug = require('remark-slug')
const autoLinkHeadings = require("remark-autolink-headings")
const highlight = require('remark-highlight.js')
const html = require('remark-html')
const algoliasearch = require('algoliasearch')

//TODO : Refactor to use filesystem/remark to do this + refactor to avoid repetition
const blogConfig = require('./../scripts/blog/config')
const docsConfig = require('./../scripts/docs/config')
const exampleConfig = require('./../scripts/example/config')
const guidesConfig = require('./../scripts/guides/config')

const fileReadingOptions = { match: /.md$/ }

const client = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, '9a3c539ada1e49ee00b670534c9c605f')
const blogIndex = client.initIndex(process.env.GATSBY_ALGOLIA_BLOG_INDEX)
const examplesIndex = client.initIndex(process.env.GATSBY_ALGOLIA_EXAMPLES_INDEX)

examplesIndex.setSettings({
  'attributesForFaceting': ['language', 'platform', 'title', 'framework', 'highlighted']
})

const digestCreator = (content) => (
  crypto.createHash(`md5`).update(JSON.stringify(content)).digest(`hex`)
)

const sourceGuides = (createNode) => (err, content, filename, next) => {
  if (err) throw err

  const { data, content: markdownContent } = matter(content)
  const frontmatter = data.category ? data : { ...data, category: [] }
  const guideId = path.basename(filename, path.extname(filename))

  unified().
    use(markdown).
    use(highlight).
    use(html).
    process(markdownContent, (err, file) => {
      createNode({
        id: guideId,
        parent: null,
        children: [],
        internal: {
          type: 'Guide',
          contentDigest: digestCreator(content),
        },
        frontmatter,
        content: String(file),
      })
      next()
    })
}

const sourceExamples = (createNode) => (err, content, filename, next) => {
  if (err) throw err
  
  const { data, content: markdownContent } = matter(content)
  const frontmatter = data.category ? data : { ...data, category: [] }
  const exampleId = path.basename(filename, path.extname(filename))

  examplesIndex.saveObject({
    title: frontmatter.title,
    description: frontmatter.description,
    platform: frontmatter.platform,
    language: frontmatter.language,
    framework: frontmatter.framework,
    highlighted: frontmatter.highlighted,
    objectID: exampleId,
  })

  unified().
    use(markdown).
    use(highlight).
    use(html).
    process(markdownContent, (err, file) => {
      createNode({
        id: exampleId,
        parent: null,
        children: [],
        internal: {
          type: 'Example',
          contentDigest: digestCreator(content),
        },
        frontmatter,
        content: String(file),
      })
      next()
    })
}

const sourceBlogs = (createNode) => (err, content, filename, next) => {
  if (err) throw err

  const { data, content: markdownContent } = matter(content)
  const frontmatter = data.category ? data : { ...data, category: [] }
  const blogId = path.basename(filename, path.extname(filename))

  blogIndex.saveObject({
    title: frontmatter.title,
    description: frontmatter.description,
    objectID: blogId,
  })

  unified().
    use(markdown).
    use(highlight).
    use(html).
    process(markdownContent, (err, file) => {
      createNode({
        id: blogId,
        parent: null,
        children: [],
        internal: {
          type: 'Blog',
          contentDigest: digestCreator(content),
        },
        frontmatter,
        content: String(file),
      })
      next()
    })
}

const sourceDocs = (createNode) => (err, content, _filename, next) => {
  if (err) throw err

  const { data: frontmatter, content: markdownContent } = matter(content)
  if(!frontmatter.gitLink) return next() //TODO: temp fix for broken doc file - fix source or end smarter rules
  const url = frontmatter.gitLink.replace(/\/README.md|.md/i, '/')

  unified().
    use(markdown).
    use(slug).
    use(autoLinkHeadings, {
      content: {
        type: "text",
        value: "#",
      },
      linkProperties: {
        className: "phenomic-HeadingAnchor",
      },
    }).
    use(html).
    use(highlight).
    process(markdownContent, (err, file) => {
      createNode({
        id: url,
        parent: null,
        children: [],
        internal: {
          type: `Doc`,
          contentDigest: digestCreator(content),
        },
        frontmatter,
        content: String(file),
      })
      next()
    })
}

const generator = (createNode) => (
  Promise.all([
    new Promise((resolve, reject) => {
      dir.readFiles(
        blogConfig.siteBlogPath,
        fileReadingOptions,
        sourceBlogs(createNode),
        resolve
      )
    }),
    
    new Promise((resolve, reject) => {
      dir.readFiles(
        exampleConfig.siteExamplePath,
        fileReadingOptions,
        sourceExamples(createNode),
        resolve
      )
    }),

    new Promise((resolve, reject) => {
      dir.readFiles(
        guidesConfig.siteGuidePath,
        fileReadingOptions,
        sourceGuides(createNode),
        resolve
      )
    }),

    new Promise((resolve, reject) => {
      dir.readFiles(
        docsConfig.mainSiteDocsPath,
        fileReadingOptions,
        sourceDocs(createNode),
        resolve
      )
    })
  ])
)

module.exports = generator
