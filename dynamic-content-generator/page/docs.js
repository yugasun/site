const path = require('path')
const { getFileFromProjectRoot } = require('./utils')
const graphqlQuery = `
{
  allDoc {
    edges {
      node {
        id
      }
    }
  }
}
`

const createDocsPages = (createPage, docs) => (
  docs.forEach(({ node }) => {
    createPage({
      path: `framework${node.id}`,
      component: getFileFromProjectRoot(`src/templates/doc.js`),
      context: {
        docId: node.id
      },
    })
  })
)

const pageCreator = (graphql, createPage) => (
  new Promise((resolve, reject) => {
    try {
      graphql(graphqlQuery).then(result => {
        createDocsPages(createPage, result.data.allDoc.edges)
        resolve()
      })
    }
    catch(e) {
      console.log('error generating docs pages:', e)
      reject(e)
    }
  })
)

module.exports = pageCreator
