const generatedMenu = require('../../src/constants/generated-menu-items')
const menuKeys = Object.keys(generatedMenu)
const updatedMenu = [
  {
    to: '/framework/docs/getting-started/',
    label: 'Getting Started',
  },
]

const providersMenu = menuKeys.map(key => {
  const thisObj = {
    to: key,
    label: generatedMenu[key]['index'][0]['label'],
  }
  updatedMenu.push(thisObj)
})

console.log(updatedMenu)
