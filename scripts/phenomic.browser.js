import 'whatwg-fetch'
import routes from '../src/routes'
import configureStore from '../src/store'
import phenomicClient from 'phenomic/lib/client'
import { initialAuthState } from '../src/redux/user'
const isClient = typeof window !== 'undefined'
const windowState = (isClient) ? window.__INITIAL_STATE__ : {}
const authState = {
  auth: initialAuthState
}
const initialState = {
  ...windowState,
  ...authState
}

const store = configureStore(initialState)

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
