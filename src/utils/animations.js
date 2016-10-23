/*
Animation Utils
*/

const prefix = ['webkit', 'moz', 'MS', 'o', '']
export const addAnimationEvent = (element, type, callback) => {
  let animationType = type
  for (let p = 0; p < prefix.length; p++) {
    if (!prefix[p]) {
      animationType = type.toLowerCase()
    }
    element.addEventListener(prefix[p] + animationType, callback, false)
  }
}
export const removeAnimationEvent = (element, type, callback) => {
  let animationType = type
  for (let p = 0; p < prefix.length; p++) {
    if (!prefix[p]) {
      animationType = type.toLowerCase()
    }
    element.removeEventListener(prefix[p] + animationType, callback, false)
  }
}
