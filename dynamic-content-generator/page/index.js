const blogPagesGenerator = require('./blog')
const docsPagesGenerator = require('./docs')
const examplePagesGenerator = require('./example')
const pluginPagesGenerator = require('./plugin')
const stackPagesGenerator = require('./stack')
const tutorialPagesGenerator = require('./tutorial')

const pageCreator = (graphql, createPage, createRedirect) =>
  Promise.all([
    blogPagesGenerator(graphql, createPage),
    examplePagesGenerator(graphql, createPage),
    pluginPagesGenerator(graphql, createPage),
    stackPagesGenerator(graphql, createPage),
    docsPagesGenerator(graphql, createPage, createRedirect),
    tutorialPagesGenerator(createPage)
  ])

module.exports = pageCreator
