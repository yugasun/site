const { getFileFromProjectRoot } = require('./utils')
const dataFile =  require('../../src/components/pages/learn/course/Details/Data.js')

function getAllTutorialsFromData() {
    const allTutorials = []

    dataFile.forEach(module => {
        module.items.forEach(item => {
            if(item.slug) {
                allTutorials.push(item)
            }
        })
    })
    
    return allTutorials
}

const createTutorialPages = (createPage) => {
    getAllTutorialsFromData().forEach(tutorial => {
        console.log(tutorial)
        delete tutorial.videoNumber
        createPage({
        path: `learn/tutorial/${tutorial.slug}`,
        component: getFileFromProjectRoot(`src/templates/tutorial.js`),
        context: {
            tutorial
        },
        })
  })
}

const pageCreator = (createPage) => (
  new Promise((resolve, reject) => {
      try {
        createTutorialPages(createPage)
        resolve()
      }
      catch(e) {
        console.log('error generating tutorial pages:', e)
        reject(e)
      }
  })
)

module.exports = pageCreator