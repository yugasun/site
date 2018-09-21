const { getFileFromProjectRoot } = require('./utils')
const workshops = getFileFromProjectRoot('src/constants/workshops.json')

const pageCreator = (createPage) => (
  new Promise((resolve, reject) => {
    try {
      Object.keys(workshops).forEach((key) => {
        createPage({
          path: `workshops/${key}`,
          component: getFileFromProjectRoot(`src/templates/workshop-form.js`),
          context: { key },
        })
      })
      resolve()
    }
    catch(e) {
      console.log('error generating workshop pages', e)
      reject(e)
    }
  })
)

module.exports = pageCreator
