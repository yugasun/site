import 'whatwg-fetch'

import routes from '../src/routes'
import configureStore from '../src/store'
import phenomicClient from 'phenomic/lib/client'
// const isClient = typeof window !== 'undefined'
const initialState = { ...(typeof window !== 'undefined') && window.__INITIAL_STATE__ }
const store = configureStore(initialState)

// dispatch to attach auth0 handler
store.dispatch({type: 'APP_INIT'})

phenomicClient({
  metadata: {
    empty: 'hi',
  },
  routes: routes,
  store: store,
})

// hot loading
// md files → JSON && generate collection + hot loading for dev
let mdContext = require.context('../content', true, /\.md$/)
mdContext.keys().forEach(mdContext)
if (module.hot) {
  const mdHotUpdater = require('phenomic/lib/client/hot-md').default
  module.hot.accept(mdContext.id, () => {
    mdContext = require.context('../content', true, /\.md$/)
    const requireUpdate = mdHotUpdater(mdContext, window.__COLLECTION__, store)
    mdContext.keys().forEach(requireUpdate)
  })
}
