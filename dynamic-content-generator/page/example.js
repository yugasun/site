const { getFileFromProjectRoot } = require('./utils')

const graphqlQuery = `
{
  allExample {
    edges {
      node {
        id
      }
    }
  }
}
`

const createExamplePages = (createPage, examples) => {
    examples.forEach(({ node }, index, records) => {
    createPage({
      path: `examples/${node.id}`,
      component: getFileFromProjectRoot(`src/templates/example.js`),
      context: {
        exampleId: node.id
      },
    })
  })
}

const pageCreator = (graphql, createPage) => (
  new Promise((resolve, reject) => {
    graphql(graphqlQuery).then(result => {
      try {
        const examples = result.data.allExample.edges
        createExamplePages(createPage, examples)
        resolve()
      }
      catch(e) {
        console.log('error generating example pages:', e)
        reject(e)
      }
    })
  })
)

module.exports = pageCreator
