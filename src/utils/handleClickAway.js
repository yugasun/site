
export default function handleClickOutside (elem, event) {
  event = window.event || event

  let el = eventTarget(event)
  while (el !== null) {
    if (el === elem) {
      return false
    }
    el = el.parentNode
  }
  return true
}

function eventTarget (event) {
  var targ = event.target ? event.target : event.srcElement
  if (targ !== null) {
    if (targ.nodeType === 3) {
      targ = targ.parentNode
    }
  }
  return targ
}
