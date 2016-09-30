
import routes from '../src/routes'
import store from '../src/store'

import phenomicStatic from 'phenomic/lib/static'

module.exports = (options) =>
  phenomicStatic({
    ...options,
    metadata: {
      empty: 'hi',
    },
    routes: routes,
    store: store,
  })
