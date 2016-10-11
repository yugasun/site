/**
Cookie + localStorage Utils
*/
function isLocalStorageSupported () {
  var supported
  if (typeof window !== 'undefined' && 'localStorage' in window) {
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
const hasLocalStorage = isLocalStorageSupported()

export const localStorageSupported = hasLocalStorage

export function setItem (key, value) {
  if (typeof window === 'undefined') {
    return false
  }
  if (!hasLocalStorage) {
    try {
      createCookie(key, value)
      return value
    } catch (e) {
      console.log('Local Storage not supported by this browser')
      // TODO: set window.var
    }
  }
  var saver = JSON.stringify(value)
  window.localStorage.setItem(key, saver)
  return parseResult(saver)
}

export function getItem (key) {
  if (typeof window === 'undefined') {
    return false
  }
  if (!hasLocalStorage) {
    try {
      return parseResult(readCookie(key))
    } catch (e) {
      return null
    }
  }
  var item = window.localStorage.getItem(key)
  return parseResult(item)
}

function parseResult (res) {
  let ret
  try {
    ret = JSON.parse(res)
    if (typeof ret === 'undefined') {
      ret = res
    }
    if (ret === 'true') {
      ret = true
    }
    if (ret === 'false') {
      ret = false
    }
    if (parseFloat(ret) === ret && typeof ret !== 'object') {
      ret = parseFloat(ret)
    }
  } catch (e) {
    ret = res
  }
  return ret
}

export function createCookie (name, value, days) {
  if (typeof window === 'undefined') {
    return false
  }
  let expires = ''
  if (days) {
    const date = new Date()
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
    expires = '; expires=' + date.toGMTString()
  }
  document.cookie = `${name}=${value}${expires}; path=/`
}

export function readCookie (name) {
  if (typeof window === 'undefined') {
    return false
  }
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
  if (typeof window === 'undefined') {
    return false
  }
  let cookies = {}
  document.cookie && document.cookie.split(';').forEach((cookie) => {
    let c = cookie.split('=')
    cookies[decodeURIComponent(c[0].replace(/^ /, ''))] = decodeURIComponent(c[1])
  })
  return cookies
}
