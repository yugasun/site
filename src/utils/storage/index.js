/**
localStorage + Cookie utils
*/
import { createCookie, readCookie, eraseCookie } from './cookie'
const isServer = typeof window === 'undefined'

let hasLocalStorage
if (!isServer && 'localStorage' in window) {
  try {
    if (typeof localStorage === 'undefined' || typeof JSON === 'undefined') {
      hasLocalStorage = false
    } else {
      hasLocalStorage = true
    }
    // test for safari private
    window.localStorage.setItem('CHECK_PRIVATE_SAFARI', '1')
    window.localStorage.removeItem('CHECK_PRIVATE_SAFARI')
  } catch (err) {
    hasLocalStorage = false
  }
}

export function setItem (key, value) {
  if (isServer) return false
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
  if (typeof window === 'undefined') return false
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

export function removeItem (key) {
  if (isServer) return false
  if (!hasLocalStorage) {
    try {
      return eraseCookie(key)
    } catch (e) {
      return null
    }
  }
  window.localStorage.removeItem(key)
}

function parseResult (result) {
  let value
  try {
    value = JSON.parse(result)
    if (typeof value === 'undefined') {
      value = result
    }
    if (value === 'true') {
      value = true
    }
    if (value === 'false') {
      value = false
    }
    if (parseFloat(value) === value && typeof value !== 'object') {
      value = parseFloat(value)
    }
  } catch (e) {
    value = result
  }
  return value
}
