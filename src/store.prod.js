import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createStore from 'phenomic/lib/redux/createStore'
import * as phenomicReducers from 'phenomic/lib/redux/modules'
import authMiddleware from './utils/auth/middleware'
import userReducer from './redux/user'

const extraMiddlewares = [ thunk, authMiddleware ]
console.log('prod store configuted')
console.log(extraMiddlewares)
export default function configureStore (preloadedState) {
  return createStore(
    combineReducers({
      ...phenomicReducers,
      auth: userReducer,
    }),
    preloadedState,
    extraMiddlewares,
  )
}
