import { combineReducers } from 'redux'
import createStore from 'phenomic/lib/redux/createStore'
import * as phenomicReducers from 'phenomic/lib/redux/modules'
import reducers from './redux/widgets'
// import Auth from './utils/AuthService'

const profile = {}
console.log('reducers', reducers)
const additionalState = {key: {
  duckText: profile,
  isOpen: true
}}
const combinedInitialStateObject = { ...(typeof window !== 'undefined') && window.__INITIAL_STATE__, ...additionalState }
const store = createStore(
  combineReducers({
    ...phenomicReducers,
    key: reducers,
  }),
  combinedInitialStateObject
)
console.log('combinedStateObject', combinedInitialStateObject)
export default store
