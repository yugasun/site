const { getFileFromProjectRoot } = require('./utils')

const graphqlQuery = `
{
  allStack {
    edges {
      node {
        id
      }
    }
  }
}
`

const createStackPages = (createPage, stackPages) => {
  stackPages.forEach(({ node }, index, records) => {
    createPage({
      path: `${node.id}`,
      component: getFileFromProjectRoot(`src/templates/stackPage.js`),
      context: {
        stackId: node.id,
      },
    })
  })
}

const pageCreator = (graphql, createPage) =>
  new Promise((resolve, reject) => {
    graphql(graphqlQuery).then(result => {
      try {
        const stackPages = result.data.allStack.edges
        createStackPages(createPage, stackPages)
        resolve()
      } catch (e) {
        console.log('error generating stack pages:', e)
        reject(e)
      }
    })
  })

module.exports = pageCreator
