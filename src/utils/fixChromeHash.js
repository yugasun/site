
// Chrome ignores url hash....
// https://stackoverflow.com/questions/38588346/anchor-a-tags-not-working-in-chrome-when-using
export default function fixChromeHashIgnore() {
  if (typeof window === 'undefined') {
    return false
  }
  const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
  if (window.location.hash && isChrome) {
    setTimeout(() => {
      var hash = window.location.hash
      window.location.hash = ""
      window.location.hash = hash
    }, 0)
  }
}
