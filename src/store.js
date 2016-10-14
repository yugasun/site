import { combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createStore from 'phenomic/lib/redux/createStore'
import * as phenomicReducers from 'phenomic/lib/redux/modules'
const isClient = typeof window !== 'undefined'
// import userReducer from './redux/user'
// console.log('userReducer', userReducer)
// import Auth from './utils/AuthService'

const combinedInitialStateObject = {...(isClient) && window.__INITIAL_STATE__}

const store = createStore(
  combineReducers({
    ...phenomicReducers,
    //auth: userReducer,
  }),
  combinedInitialStateObject,
  compose(
   applyMiddleware(thunk),
   // isClient && window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
)
// console.log('intial state', store.getState())
export default store
