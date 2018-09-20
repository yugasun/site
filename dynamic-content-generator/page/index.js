const blogPagesGenerator = require('./blog')
const docsPagesGenerator = require('./docs')
const workshopPagesGenerator = require('./workshop')

const pageCreator = (graphql, createPage) => (
  Promise.all([
    blogPagesGenerator(graphql, createPage),
    docsPagesGenerator(graphql, createPage),
    workshopPagesGenerator(createPage),
  ])
)

module.exports = pageCreator
