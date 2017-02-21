import { getItemSync, removeItemSync } from '../utils/storage'
import { getXsrfToken } from '../utils/auth/xsrfToken'
import { isAuthenticated } from '../utils/auth/authToken'
import { getUniqueID, getVisitorUUID } from '../utils/analytics/visitor'
import { getBrowserData } from '../utils/brower-detect'
import lock from '../utils/auth'

const isClient = typeof window !== 'undefined'

/* Constants */
const LOGIN_STARTED = 'LOGIN_STARTED'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_ERROR = 'LOGIN_ERROR'
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

/* Actions */
function loginStarted() {
  return {
    type: LOGIN_STARTED,
  }
}

export function loginSuccess(profile) {
  return {
    type: LOGIN_SUCCESS,
    profile
  }
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  }
}

export function login() {
  const redirectURL = isClient && encodeURIComponent(window.location.href)
  // pass xsrf token through with state
  const state = `token=${getXsrfToken()}&url=${redirectURL}`
  const profile = getProfile()
  if (profile) {
    console.log(profile.user_metadata) // eslint-disable-line
  }
  const options = {
    auth: {
      params: {
        state,
        analytics: {
          // info about visitor
          visitor: {
            uaId: getUniqueID(),
            uuId: getVisitorUUID(),
            browser: getBrowserData(),
            userAgent: navigator.userAgent,
          },
          firstPageSeen: 'lol',
          firstReferringSite: 'ladlakslk'
          /*
          'firstPageSeen', string
          'firstReferringSite', string
          'firstConversionEvent', { timestamp, name, }
          'lastPageSeen', string
          'lastReferringSite', string
          'lastConversionEvent' { timestamp, name, }
          //'Number of event completions',
          //'Number of Pageviews',
          //'Number of Visits',
          'OriginalSourceData 1',
          'Original Source Data 2',
          'Original Source Type',
          'TimeOfFirstVisit',
          'TimeOfLastVisit',
          'conversionEvents', []
          'formSubmissions', []

          */
        },
        customValues: 'value1',
      },
    }
  }

  if (typeof ga !== 'undefined' && process.env.NODE_ENV === 'production') {
    ga('send', { // eslint-disable-line
      hitType: 'event',
      eventCategory: 'user',
      eventAction: 'sign_up',
      eventLabel: 'Beta Signup'
    })
  }

  return dispatch => {
    if (isClient) {
      // collect data and then lock
      lock.show(options)
    }
    return dispatch(loginStarted())
    // login finishes via custom middleware user-middleware.js
  }
}

function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS
  }
}

export function logout() {
  return dispatch => {
    // remove auth0 localStorage items
    removeItemSync('id_token')
    removeItemSync('profile')
    return dispatch(logoutSuccess())
  }
}

function getProfile() {
  return getItemSync('profile')
}

/* Reducer */
export const initialAuthState = {
  isAuthenticated: isAuthenticated(),
  profile: getProfile(),
  loading: false,
  error: ''
}

// console.log('initialAuthState', initialAuthState)

export default function authReducer(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_STARTED:
      return {
        ...state,
        loading: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        profile: action.profile,
        loading: false,
        error: ''
      }
    case LOGIN_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        profile: null,
        loading: false,
        error: action.error
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        profile: null
      }
    default:
      return state
  }
}
