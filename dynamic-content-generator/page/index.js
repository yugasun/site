const blogPagesGenerator = require('./blog')
const docsPagesGenerator = require('./docs')
const examplePagesGenerator = require('./example')
const pluginPagesGenerator = require('./plugin')
const stackPagesGenerator = require('./stack')
const tutorialPagesGenerator = require('./tutorial')
const coursesPagesGenerator = require('./courses')

// cn pages
const cnDocsPagesGenerator = require('./cn/docs')

const pageCreator = (graphql, createPage, createRedirect) =>
  Promise.all([
    blogPagesGenerator(graphql, createPage),
    examplePagesGenerator(graphql, createPage),
    pluginPagesGenerator(graphql, createPage),
    stackPagesGenerator(graphql, createPage),
    docsPagesGenerator(graphql, createPage, createRedirect),
    tutorialPagesGenerator(createPage),
    coursesPagesGenerator(createPage),

    cnDocsPagesGenerator(graphql, createPage, createRedirect),
  ])

module.exports = pageCreator
