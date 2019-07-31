/*
  Remove UTM tokens from URL
*/
const removeUTM = () => {
  if (typeof window === 'undefined') {
    return false
  }
  if (
    window.location.search.indexOf('utm_') !== -1 &&
    window.history &&
    history.replaceState
  ) {
    let url = window.location
      .toString()
      .replace(
        /(\?)utm[^&]*(?:&utm[^&]*)*&(?=(?!utm[^\s&=]*=)[^\s&=]+=)|\?utm[^&]*(?:&utm[^&]*)*$|&utm[^&]*/gi,
        '$1'
      )
    if (url.indexOf('&') > -1 && url.indexOf('?') === -1) {
      url = url.replace(/&/, '?')
    }
    history.replaceState({}, '', url)
  }
}
export default removeUTM
