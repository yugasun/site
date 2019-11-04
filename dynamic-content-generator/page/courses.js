const { getFileFromProjectRoot } = require('./utils')
const dataFile =  require('../../src/constants/courses/index.js')

const CreateCoursesPages = (createPage) => {
    dataFile.forEach(course => {
        createPage({
        path: `learn/courses/${course.slug}`,
        component: getFileFromProjectRoot(`src/templates/courses.js`),
        context: {
            course
        },
        })
  })
}

const pageCreator = (createPage) => (
  new Promise((resolve, reject) => {
      try {
        CreateCoursesPages(createPage)
        resolve()
      }
      catch(e) {
        console.log('error generating tutorial pages:', e)
        reject(e)
      }
  })
)

module.exports = pageCreator