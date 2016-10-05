import { combineReducers } from 'redux'
import createStore from 'phenomic/lib/redux/createStore'
import * as phenomicReducers from 'phenomic/lib/redux/modules'
import userReducer from './redux/user'
// import Auth from './utils/AuthService'

const additionalState = {}
const combinedInitialStateObject = { ...(typeof window !== 'undefined') && window.__INITIAL_STATE__, ...additionalState }

const store = createStore(
  combineReducers({
    ...phenomicReducers,
    user: userReducer,
  }),
  combinedInitialStateObject
)
// console.log('intial state', store.getState())
export default store
