import auth from '../utils/auth'

/* Constants */
const AUTHENTICATE_START = 'AUTHENTICATE_START'
const AUTHENTICATE_COMPLETE = 'AUTHENTICATE_COMPLETE'
const AUTHENTICATE_ERROR = 'AUTHENTICATE_ERROR'

/* Actions */
export function authenticateStart () {
  return {
    type: AUTHENTICATE_START
  }
}
export function authenticateComplete (user) {
  return {
    type: AUTHENTICATE_COMPLETE,
    user
  }
}
export function authenticateError (errors) {
  return {
    type: AUTHENTICATE_ERROR,
    errors
  }
}

/* Reducer */
const initialState = {
  loading: false,
  valid: false,
  errors: null,
  profile: auth.getProfile()
}
export default function userReducer (state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE_START :
      return {
        ...state,
        loading: true,
      }
    case AUTHENTICATE_ERROR :
      return {
        ...state,
        errors: action.errors,
        loading: false,
      }
    case AUTHENTICATE_COMPLETE :
      return {
        ...state,
        valid: true,
        loading: false,
        profile: action.user
      }
    default :
      return state
  }
}
