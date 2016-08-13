/*
  Load scripts
*/

if (typeof window !== 'undefined') {
  window.loadedScripts = {}
}

export function addScript (scriptSrc) {
  if (window.loadedScripts[`'${scriptSrc}'`]) {
    console.log('Already loaded')
    return false
  }
  const s = document.getElementsByTagName('script')[0]
  const el = document.createElement('script')
  el.type = 'text/javascript'
  el.async = true
  el.src = scriptSrc
  el.id = scriptSrc
  console.log('add', scriptSrc)
  window.loadedScripts[`'${scriptSrc}'`] = true
  return s.parentNode.insertBefore(el, s)
}

export function removeScript (scriptSrc) {
  console.log('remove script')
  var script = document.getElementById(scriptSrc)
  script.parentElement.removeChild(script)
  delete window.loadedScripts[`'${scriptSrc}'`]
}
