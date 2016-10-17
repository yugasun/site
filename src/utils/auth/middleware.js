import { loginSuccess, loginError } from '../../redux/user'
import getURLParams from '../urlHelpers'
import { setItem } from '../storage'
import { getXsrfToken } from './xsrfToken'
import lockInstance from './lockInstance'

function handleAuthRedirect (url) {
  console.log('Handler Redirect')
  var redirect = new CustomEvent('reactRouterRedirect', { // eslint-disable-line
    detail: {
      url: url,
    },
    bubbles: false,
    cancelable: false
  })
  window.dispatchEvent(redirect)
}

const createOneShot = (middleware) => {
  let hasBeenTriggered = false
  return (store) => (next) => (action) => {
    next(action)

    if (!hasBeenTriggered) {
      hasBeenTriggered = true
      middleware(store.dispatch)
    }
  }
}

const authMiddleware = createOneShot((dispatch) => {
  /* This function is called exactly once as soon as the first action
    runs through redux. Perfect moment to glue things together!

    example:
    someEventEmitter.addEventListener('change', (event) => {
        dispatch(someAction(event.value));
    });
  */

  if (typeof window === 'undefined') {
    return false
  }
  console.log('authCB added')
  // register lock callback once
  lockInstance.on('authenticated', function (authResult) {
    // console.log('auth callback triggered') // eslint-disable-line
    console.log('authResult', authResult)
    // Check xrsf token
    const stateValues = getURLParams('http://dummy.com?' + authResult.state)
    // if (!authResult.idTokenPayload.email_verified) {
    //   dispatch(loginError('email-not-verified'))
    //   return false
    // }

    if (authResult.idToken && stateValues.token === getXsrfToken()) {
      setItem('id_token', authResult.idToken)
      // return { authenticated: true }
    } else {
      dispatch(loginError('invalid-token'))
      alert('Error your authentication token is wrong. try logging in again') // eslint-disable-line
      handleAuthRedirect(stateValues.url)
      return false
    }
    // Async loads the user profile data
    lockInstance.getProfile(authResult.idToken, (error, profile) => {
      setItem('profile', profile)
      if (error) {
        console.log('Error loading the Profile', error)
        return dispatch(loginError(error))
      } else {
        // set tokens
        setItem('profile', profile)
        dispatch(loginSuccess(profile))
        // redirect
        handleAuthRedirect(stateValues.url)
      }
    })
  })
})

export default authMiddleware
