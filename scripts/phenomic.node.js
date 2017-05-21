import phenomicStatic from 'phenomic-serverless/lib/static'
import metadata from './metadata'
import routes from '../src/routes'
import configureStore from '../src/store'

const initialState = { ...(typeof window !== 'undefined') && window.__INITIAL_STATE__ }
const store = configureStore(initialState)

export default (options) =>
  phenomicStatic({ ...options, metadata, routes, store })
