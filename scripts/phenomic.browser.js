// Hot loading HRM Patch
import 'react-hot-loader/patch'
import 'whatwg-fetch'

import phenomicClient from 'phenomic-serverless/lib/client'
import metadata from './metadata.js'
import routes from '../src/routes.js'
import configureStore from '../src/store.js'
import { initialAuthState } from '../src/redux/user'

const windowState = (typeof window !== 'undefined') ? window.__INITIAL_STATE__ : {}
const authState = {
  auth: initialAuthState
}
const initialState = {
  ...windowState,
  ...authState // hydrate auth state
}
const store = configureStore(initialState)

// dispatch to attach auth0 middleware handler
store.dispatch({
  type: 'APP_INIT'
})

phenomicClient({
  metadata,
  routes,
  store,
})

// md files processed via phenomic-loader to JSON & generate collection
let mdContext = require.context('../content', true, /\.(md|markdown)$/)
mdContext.keys().forEach(mdContext)

// hot loading
if (module.hot) {
  // hot load md
  module.hot.accept(mdContext.id, () => {
    mdContext = require.context("../content", true, /\.(md|markdown)$/)
    const mdHotUpdater = require('phenomic-serverless/lib/client/hot-md').default
    const requireUpdate = mdHotUpdater(mdContext, window.__COLLECTION__, store)
    mdContext.keys().forEach(requireUpdate)
  })

  // hot load app
  module.hot.accept(
    [ "./metadata.js", "../src/routes.js", "../src/store.js" ],
    () => phenomicClient({ metadata, routes, store })
  )
}
