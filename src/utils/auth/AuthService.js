/* Depricated EvenetEmitter Auth0 setup */
import { EventEmitter } from 'events'
import { getItem } from '../storage'
import { isTokenExpired } from './authToken'
import lockInstance from './lockInstance'
const isClient = typeof window !== 'undefined'

// temp hack until redux implmented
function triggerLoginEvent (authResult, profile) {
  var LoginEvent = new CustomEvent('serverlessLogin', { // eslint-disable-line
    detail: {
      profile: profile,
    },
    bubbles: false,
    cancelable: false
  })
  // Trigger it!
  if (authResult.state && authResult.state.split('url=')) {
    const redirect = getItem('auth_redirect')
    if (window.location.href !== redirect) {
      // TODO: make react router history.push
      // window.location.href = redirect
    }
    // alert('Authed!') // eslint-disable-line
    setTimeout(function () {
      window.dispatchEvent(LoginEvent)
    }, 300)
  }
}

export default class AuthService extends EventEmitter {
  constructor (clientId, domain) {
    super()
    if (!isClient) {
      return false
    }
    // Configure Auth0
    this.lock = lockInstance
    // Add callback for lock `authenticated` event
    // this.lock.on('authenticated', this._doAuthentication.bind(this))
    // Add callback for lock `authorization_error` event
    this.lock.on('authorization_error', this._authorizationError.bind(this))
    // binds login functions to keep this context
    this.login = this.login.bind(this)
  }

  _doAuthentication (authResult) {
    // Saves the user token
    this.setToken(authResult.idToken)
    // Async loads the user profile data
    this.lock.getProfile(authResult.idToken, (error, profile) => {
      if (error) {
        console.log('Error loading the Profile', error)
      } else {
        alert('this shouldnt run') // eslint-disable-line
        triggerLoginEvent(authResult, profile)
        this.setProfile(profile)
        // redirect
      }
    })
  }

  _authorizationError (error) {
    // Unexpected authentication error
    console.log('Authentication Error', error)
  }

  login (options) {
    // Call the show method to display the widget.
    this.lock.show(options, function () {
      console.log('auth login cb')
    })
  }

  loggedIn () {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken()
    return !!token && !isTokenExpired(token)
  }

  setProfile (profile) {
    // Saves profile data to isClient && window.localStorage
    isClient && window.localStorage.setItem('profile', JSON.stringify(profile))
    // Triggers profile_updated event to update the UI
    this.emit('profile_updated', profile)
  }

  getProfile () {
    // Retrieves the profile data from isClient && window.localStorage
    const profile = isClient && window.localStorage.getItem('profile')
    return profile ? JSON.parse(isClient && window.localStorage.profile) : {}
  }

  setToken (idToken) {
    // Saves user token to isClient && window.localStorage
    isClient && window.localStorage.setItem('id_token', idToken)
  }

  getToken () {
    // Retrieves the user token from isClient && window.localStorage
    return isClient && window.localStorage.getItem('id_token')
  }

  logout () {
    // Clear user token and profile data from isClient && window.localStorage
    isClient && window.localStorage.removeItem('id_token')
    isClient && window.localStorage.removeItem('profile')
  }
}
