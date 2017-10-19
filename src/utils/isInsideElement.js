export default function isInsideElement (element, className) {
  console.log('run?')
  while (element) {
    console.log('element', element)
    // if target is DOCUMENT_NODE bail
    if (element.nodeType === 9) {
      return false
    }
    // In this instance I am looking up matching classes but you can check for whatever
    var classes = element && element.getAttribute("class")
    // look for my matching class of 'this-is-my-non-unique-class'
    if (classes && classes.indexOf(className) > -1) {
      // Its a match! give me back the element
      return element
    }
    // not found yet, reset element to it's parent and look there
    element = element.parentNode
  }
  return false
}