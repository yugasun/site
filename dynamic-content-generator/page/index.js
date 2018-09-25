const blogPagesGenerator = require('./blog')
const docsPagesGenerator = require('./docs')
const workshopPagesGenerator = require('./workshop')

const pageCreator = (graphql, createPage, createRedirect) => (
  Promise.all([
    blogPagesGenerator(graphql, createPage),
    docsPagesGenerator(graphql, createPage, createRedirect),
    workshopPagesGenerator(createPage),
  ])
)

module.exports = pageCreator
