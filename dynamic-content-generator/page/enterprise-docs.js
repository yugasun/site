const path = require('path')
const { getFileFromProjectRoot } = require('./utils')
const graphqlQuery = `
{
  allEnterprise {
    edges {
      node {
        id
      }
    }
  }
}
`

const createdEnterpriseDocPages = (
  createPage,
  createRedirect,
  enterpriseDocs
) =>
  enterpriseDocs.forEach(({ node }) => {
    const docLink = `/${node.id}`

    createPage({
      path: docLink,
      component: getFileFromProjectRoot(`src/templates/docEnterprise.js`),
      context: {
        enterpriseId: node.id,
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
        createdEnterpriseDocPages(
          createPage,
          createRedirect,
          result.data.allEnterprise.edges
        )
        resolve()
      })
    } catch (e) {
      console.log('error generating docs pages:', e)
      reject(e)
    }
  })

module.exports = pageCreator
