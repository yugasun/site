const { getFileFromProjectRoot } = require('./utils')

const graphqlQuery = `
{
  allPlugin {
    edges {
      node {
        id
      }
    }
  }
}
`

const createPluginPages = (createPage, plugins) => {
  plugins.forEach(({ node }, index, records) => {
    createPage({
      path: `plugins/${node.id}`,
      component: getFileFromProjectRoot(`src/templates/plugin.js`),
      context: {
        pluginId: node.id,
      },
    })
  })
}

const pageCreator = (graphql, createPage) =>
  new Promise((resolve, reject) => {
    graphql(graphqlQuery).then(result => {
      try {
        const plugins = result.data.allPlugin.edges
        createPluginPages(createPage, plugins)
        resolve()
      } catch (e) {
        console.log('error generating plugin pages:', e)
        reject(e)
      }
    })
  })

module.exports = pageCreator
