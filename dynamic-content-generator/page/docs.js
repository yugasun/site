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

const createDocsPages = (createPage, createRedirect, docs) =>
  docs.forEach(({ node }) => {
    const docLink = `/framework${node.id}`

    createPage({
      path: docLink,
      component: getFileFromProjectRoot(`src/templates/doc.js`),
      context: {
        docId: node.id,
      },
    })

    const endsWithTrailingSlash = docLink.endsWith('/')
    const fromPath = endsWithTrailingSlash ? docLink.slice(0, -1) : docLink
    const toPath = endsWithTrailingSlash ? docLink : `${docLink}/`

    createRedirect({
      fromPath,
      toPath,
      isPermanentRedirect: true,
      redirectInBrowser: true,
    })
  })

const pageCreator = (graphql, createPage, createRedirect) =>
  new Promise((resolve, reject) => {
    try {
      graphql(graphqlQuery).then(result => {
        createDocsPages(createPage, createRedirect, result.data.allDoc.edges)
        resolve()
      })
    } catch (e) {
      console.log('error generating docs pages:', e)
      reject(e)
    }
  })

module.exports = pageCreator
