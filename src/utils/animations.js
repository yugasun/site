/*
Animation Utils
*/

const prefix = ['webkit', 'moz', 'MS', 'o', '']
export const addAnimationEvent = (element, type, callback) => {
  for (var p = 0; p < prefix.length; p++) {
    if (!prefix[p]) type = type.toLowerCase()
    element.addEventListener(prefix[p] + type, callback, false)
  }
}
export const removeAnimationEvent = (element, type, callback) => {
  for (var p = 0; p < prefix.length; p++) {
    if (!prefix[p]) type = type.toLowerCase()
    element.removeEventListener(prefix[p] + type, callback, false)
  }
}
