
import routes from '../src/routes'
import configureStore from '../src/store'
import phenomicStatic from 'phenomic/lib/static'

const initialState = { ...(typeof window !== 'undefined') && window.__INITIAL_STATE__ }
const store = configureStore(initialState)

// // dispatch to attach auth0 handler
// store.dispatch({type: 'APP_INIT'})

module.exports = (options) =>
  phenomicStatic({
    ...options,
    metadata: {
      empty: 'hi',
    },
    routes: routes,
    store: store,
  })
