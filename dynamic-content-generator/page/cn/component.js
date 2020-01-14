const { getFileFromProjectRoot } = require('../utils')

const graphqlQuery = `
{
  allCnComponent {
    edges {
      node {
        id
      }
    }
  }
}
`

const createComponentPages = (createPage, components) => {
  components.forEach(({ node }, index, records) => {
    createPage({
      path: `components/${node.id}`,
      component: getFileFromProjectRoot(`src/templates/cn/component.js`),
      context: {
        componentId: node.id,
      },
    })
  })
}

const pageCreator = (graphql, createPage) =>
  new Promise((resolve, reject) => {
    graphql(graphqlQuery).then(result => {
      try {
        const components = result.data.allCnComponent.edges
        createComponentPages(createPage, components)
        resolve()
      } catch (e) {
        console.log('error generating component pages:', e)
        reject(e)
      }
    })
  })

module.exports = pageCreator
