const { getFileFromProjectRoot } = require('./utils')
const awsFullStackDataFile =  require('../../src/constants/courses/fullStackAws.js')
const serverlessFrontendDataFile =  require('../../src/constants/courses/serverlessForFrontend.js')

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

function getAllTutorialsFromData(dataFile) {
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

const createTutorialPagesFullStackAws = (createPage) => {
    getAllTutorialsFromData(awsFullStackDataFile).forEach(tutorial => {
        createPage({
        path: `learn/tutorial/${tutorial.slug}`,
        component: getFileFromProjectRoot(`src/templates/tutorial.js`),
        context: {
            tutorial,
            outline: awsFullStackDataFile,
            courseName: 'Serverless Full Stack Application on AWS',
            courseLink: '/learn/courses/full-stack-application-development-on-aws/'
        },
        })
    })
}

const createTutorialPagesFrontend = (createPage) => {
    getAllTutorialsFromData(serverlessFrontendDataFile).forEach(tutorial => {
        createPage({
        path: `learn/tutorial/${tutorial.slug}`,
        component: getFileFromProjectRoot(`src/templates/tutorial.js`),
        context: {
            tutorial,
            outline: serverlessFrontendDataFile,
            courseName: 'Serverless for Frontend Developers',
            courseLink: '/learn/courses/serverless-for-frontend-developers/'
        },
        })
    })
}

const pageCreator = (createPage) => (
  new Promise((resolve, reject) => {
      try {
        createTutorialPagesFullStackAws(createPage)
        createTutorialPagesFrontend(createPage)
        resolve()
      }
      catch(e) {
        console.log('error generating tutorial pages:', e)
        reject(e)
      }
  })
)

module.exports = pageCreator