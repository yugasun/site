/**
Cookie + localStorage Utils
*/
const hasLS = hasLocalStorage()
function hasLocalStorage () {
  var supported
  if ('localStorage' in window) {
    try {
      if (typeof localStorage === 'undefined' ||
      typeof JSON === 'undefined') {
        supported = false
      } else {
        supported = true
      }
      // test for safari private
      localStorage.setItem('CHECK_PRIVATE_SAFARI', '1') // eslint-disable-line
      localStorage.removeItem('CHECK_PRIVATE_SAFARI') // eslint-disable-line
    } catch (err) {
      supported = false
    }
  }
  return supported
}

export function createCookie (name, value, days) {
  let expires = ''
  if (days) {
    const date = new Date()
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
    expires = '; expires=' + date.toGMTString()
  }
  document.cookie = `${name}=${value}${expires}; path=/`
}

export function readCookie (name) {
  const find = `${name}=`
  const allCookies = document.cookie.split(';')
  for (var i = 0; i < allCookies.length; i++) {
    let cookie = allCookies[i]
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1, cookie.length)
    }
    if (cookie.indexOf(find) === 0) {
      return cookie.substring(find.length, cookie.length)
    }
  }
  return null
}

export function eraseCookie (name) {
  createCookie(name, '', -1)
}

export function listCookies () {
  let cookies = {}
  document.cookie && document.cookie.split(';').forEach((cookie) => {
    let c = cookie.split('=')
    cookies[decodeURIComponent(c[0].replace(/^ /, ''))] = decodeURIComponent(c[1])
  })
  return cookies
}
