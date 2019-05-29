const generatedMenu = require('../../src/constants/generated-menu-items')
const path = require('path')
const fs = require('fs-extra')
const config = require('./config')

const finalMenu = [
  {
    to: '/framework/docs/',
    label: 'framework open-source',
    content: [
      {
        to: '/framework/docs/getting-started/',
        label: 'getting started',
      },
      {
        to: '/examples/',
        label: 'examples',
      },
      {
        to: '/blog/category/guides-and-tutorials/',
        label: 'tutorials',
      },
    ],
  },
]

function findChildrenForPath(path) {
  if (path.endsWith('/')) {
    path = path.substring(0, path.length - 1)
  }
  const hasChildren = generatedMenu[path] && generatedMenu[path].children

  if (hasChildren && hasChildren.length) {
    const cleanedChildren = hasChildren.map(child => cleanKeys(child))
    const childrenWithChildren = cleanedChildren.map(child =>
      menuWithAllChildren(child)
    )
    return childrenWithChildren
  } else {
    return null
  }
}

function addChildren(parent) {
  const returnObj = parent
  const hasChildren = findChildrenForPath(parent.to)
  if (hasChildren) {
    returnObj.content = hasChildren
  }
  return returnObj
}

function cleanKeys(obj) {
  let thisLabel = obj.title.toLowerCase()
  if (thisLabel.includes('aws')) {
    thisLabel = thisLabel.replace('aws', 'AWS')
  }

  if (thisLabel.includes('cli')) {
    thisLabel = thisLabel.replace('cli', 'CLI')
  }

  const cleanedObj = {
    to: obj.path,
    label: thisLabel,
  }
  return cleanedObj
}

const providersMenuObj = {
  to: '/framework/docs/providers/',
  label: 'providers',
}

function menuWithAllChildren(menuObj) {
  const menuSubChildren = []
  const menuChildren = findChildrenForPath(menuObj.to)
  if (menuChildren) {
    menuChildren.map(child => {
      const finalObjWithChildren = addChildren(child)
      menuSubChildren.push(finalObjWithChildren)
    })
    if (menuSubChildren.length) {
      menuObj.content = menuSubChildren
    }
  }

  return menuObj
}

finalMenu[0].content.splice(1, 0, menuWithAllChildren(providersMenuObj))
generateDocMenu(finalMenu)

function generateDocMenu(data) {
  const content = `module.exports = ${JSON.stringify(data, null, 2)}`
  const fileName = 'generated-menu-items-new.js'
  const p = path.join(config.docsMenuPath, fileName)
  fs.writeFile(p, content, 'utf-8', err => {
    if (err) {
      return console.log(err)
    }
    console.log(`${config.docsMenuPath}${fileName} Docs file generated`)
  })
}
