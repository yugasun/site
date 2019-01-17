const { getFileFromProjectRoot } = require('./utils')

const graphqlQuery = `
{
  allKickstart {
    edges {
      node {
        id
      }
    }
  }
}
`

const createKickstartPages = (createPage, kickstartPages) => {
    kickstartPages.forEach(({ node }, index, records) => {
    createPage({
      path: `${node.id}`,
      component: getFileFromProjectRoot(`src/templates/kickstartPage.js`),
      context: {
        kickstartId: node.id
      },
    })
  })
}

const pageCreator = (graphql, createPage) => (
  new Promise((resolve, reject) => {
    graphql(graphqlQuery).then(result => {
      try {
        const kickstartPages = result.data.allKickstart.edges
        createKickstartPages(createPage, kickstartPages)
        resolve()
      }
      catch(e) {
        console.log('error generating kickstart pages:', e)
        reject(e)
      }
    })
  })
)

module.exports = pageCreator
