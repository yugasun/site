import decode from 'jwt-decode'
import { setItem, getItem, removeItem } from '../storage'

const TOKEN_KEY = 'id_token'

function getTokenExpirationDate (token) {
  const decoded = decode(token)
  console.log('decoded', decoded)
  if (!decoded.exp) {
    return null
  }

  // The 0 here is the key, which sets the date to the epoch
  const date = new Date(0)
  date.setUTCSeconds(decoded.exp)
  return date
}

export function isTokenExpired (token) {
  const date = getTokenExpirationDate(token)
  console.log('token date', date)
  const offsetSeconds = 0
  if (date === null) {
    return false
  }
  var test = !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)))
  console.log('isTokenExpired', test)
  return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)))
}

export function setAuthToken (authToken) {
  setItem(TOKEN_KEY, authToken)
}

export function getAuthToken () {
  return getItem(TOKEN_KEY)
}

export function clearAuthToken () {
  removeItem(TOKEN_KEY)
}

export function isAuthenticated () {
  const token = getAuthToken()
  console.log('tokentoken', token)
  return !!token && !isTokenExpired(token)
}
