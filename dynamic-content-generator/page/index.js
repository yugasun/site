const blogPagesGenerator = require('./blog')
const docsPagesGenerator = require('./docs')
const examplePagesGenerator = require('./example')
const workshopPagesGenerator = require('./workshop')
const kickstartPagesGenerator = require('./kickstart')

const pageCreator = (graphql, createPage, createRedirect) => (
  Promise.all([
    blogPagesGenerator(graphql, createPage),
    examplePagesGenerator(graphql, createPage),
    kickstartPagesGenerator(graphql, createPage),
    docsPagesGenerator(graphql, createPage, createRedirect),
    workshopPagesGenerator(createPage),
  ])
)

module.exports = pageCreator
