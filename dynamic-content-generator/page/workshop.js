const { getFileFromProjectRoot } = require('./utils')
const workshops = require(getFileFromProjectRoot(
  'src/constants/workshops.json'
))
//delete workshops['san-francisco']

const pageCreator = createPage =>
  new Promise((resolve, reject) => {
    try {
      Object.keys(workshops).forEach(key => {
        createPage({
          path: `workshops/${key}`,
          component: getFileFromProjectRoot(`src/templates/workshop-form.js`),
          context: { key },
        })
      })
      resolve()
    } catch (e) {
      console.log('error generating workshop pages', e)
      reject(e)
    }
  })

module.exports = pageCreator
