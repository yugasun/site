const { getFileFromProjectRoot } = require('../utils')

// const authors = require(getFileFromProjectRoot(
//   'src/constants/generated-authors.json'
// ))
// const categories = require(getFileFromProjectRoot(
//   'src/constants/categories.json'
// ))
// const highlightedCaseStudiess = require(getFileFromProjectRoot(
//   'src/constants/featured-caseStudies.json'
// ))

const caseStudiesPerPage = 9
// const highlightedCaseStudiessRegEx = new RegExp(highlightedCaseStudiess.join('|'), 'gi')
const graphqlQuery = `
{
  allCaseStudies {
    edges {
      node {
        id
      }
    }
  }
}
`

// const createCaseStudiesListingPageWithPagination = (createPage, caseStudies) => {
//   for (let i = 0; i < caseStudies.length; i += caseStudiesPerPage) {
//     const page = i / caseStudiesPerPage
//     createPage({
//       path: `case-studies${page === 0 ? '' : '/page/' + (page + 1)}`,
//       component: getFileFromProjectRoot(`src/templates/cn/caseStudiesList.js`),
//       context: {
//         limit: caseStudiesPerPage,
//         start: i,
//         // highlightedCaseStudiessRegEx,
//       },
//     })
//   }
// }

const createCaseStudiesPages = (createPage, caseStudies) => {
  caseStudies.forEach(({ node }, index, records) => {
    createPage({
      path: `cn/learn/case-studies/${node.id}`,
      component: getFileFromProjectRoot(`src/templates/cn/caseStudies.js`),
      context: {
        caseStudiesId: node.id,
        previousCaseStudiesId: (records[index - 1] || records[index + 2]).node.id,
        nextCaseStudiesId: (records[index + 1] || records[index - 2]).node.id,
      },
    })
  })
}

const pageCreator = (graphql, createPage) =>
  new Promise((resolve, reject) => {
    graphql(graphqlQuery).then(result => {
      try {
        const caseStudies = result.data.allCaseStudies.edges
        // createCaseStudiesListingPageWithPagination(createPage, caseStudies)
        createCaseStudiesPages(createPage, caseStudies)
        resolve()
      } catch (e) {
        console.log('error generating caseStudies pages:', e)
        reject(e)
      }
    })
  })

module.exports = pageCreator
