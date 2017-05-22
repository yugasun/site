import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createStore from 'phenomic-serverless/lib/redux/createStore'
import * as phenomicReducers from 'phenomic-serverless/lib/redux/modules'
import authMiddleware from '../user-middleware'
import userReducer from '../user'

const extraMiddlewares = [thunk, authMiddleware]

export default function configureStore(preloadedState) {
  return createStore(
    combineReducers({
      ...phenomicReducers,
      auth: userReducer,
    }),
    preloadedState,
    extraMiddlewares,
  )
}
