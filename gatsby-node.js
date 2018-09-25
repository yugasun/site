const nodeGenerator = require('./dynamic-content-generator/node')
const pageGenerator = require('./dynamic-content-generator/page')

exports.sourceNodes = async ({ boundActionCreators: { createNode } }) => (
  nodeGenerator(createNode)
)

exports.createPages = ({ graphql, boundActionCreators: { createPage, createRedirect } }) => (
  pageGenerator(graphql, createPage, createRedirect)
)
