const blogPagesGenerator = require('./blog')
const docsPagesGenerator = require('./docs')
const examplePagesGenerator = require('./example')
const pluginPagesGenerator = require('./plugin')
const kickstartPagesGenerator = require('./kickstart')

const pageCreator = (graphql, createPage, createRedirect) =>
  Promise.all([
    blogPagesGenerator(graphql, createPage),
    examplePagesGenerator(graphql, createPage),
    pluginPagesGenerator(graphql, createPage),
    kickstartPagesGenerator(graphql, createPage),
    docsPagesGenerator(graphql, createPage, createRedirect),
  ])

module.exports = pageCreator
