const { getFileFromProjectRoot } = require('./utils')
const dataFile =  require('../../src/components/pages/learn/course/Details/Data.js')

function addPrevNextToTutorials(allTutorials) {
    const allTutorialsWithPrevNext = allTutorials.map((tutorial, index) => {
        const previousVideo = allTutorials[index - 1]
        const nextVideo = allTutorials[index + 1]
        if(previousVideo) {
            tutorial.prevVideo = {
                title: previousVideo.title,
                slug: previousVideo.slug
            }
        }

        if(nextVideo) {
            tutorial.nextVideo = {
                title: nextVideo.title,
                slug: nextVideo.slug
            }
        }

        return tutorial
    })
    return allTutorialsWithPrevNext
}

function getAllTutorialsFromData() {
    const allTutorials = []

    dataFile.forEach(module => {
        module.items.forEach(item => {
            if(item.slug) {
                allTutorials.push(item)
            }
        })
    })
    const tutorialsWithPrevNext = addPrevNextToTutorials(allTutorials)
    return tutorialsWithPrevNext
}

const createTutorialPages = (createPage) => {
    getAllTutorialsFromData().forEach(tutorial => {
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