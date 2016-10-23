/**
 * Auth0 Lock instance
 */
import { initializeXsrfToken, getXsrfToken } from './xsrfToken'
import { getVisitorID } from '../analytics/visitor'
import LogoImg from '../../assets/images/serverless_logo.png'
const isClient = typeof window !== 'undefined'
let Auth0Lock
if (!process.env.AUTH0_CLIENT_ID) {
  throw new Error('AUTH_CLIENT_ID is not defined in /src/_config.js file')
}
if (!process.env.AUTH0_DOMAIN) {
  throw new Error('AUTH_DOMAIN is not defined in /src/_config.js file')
}
console.log('isClient', isClient)
if (isClient) {
  Auth0Lock = require('auth0-lock').default // eslint-disable-line
}
console.log('Auth0Lock', Auth0Lock)
// init token
initializeXsrfToken()

const redirect = isClient && encodeURIComponent(window.location.href)
const redirectURL = isClient && `${window.location.origin}/loading/`
const state = `token=${getXsrfToken()}&url=${redirect}&other=lol`
// Configure Auth0
const lockInstance = isClient && new Auth0Lock( // eslint-disable-line
  process.env.AUTH0_CLIENT_ID,
  process.env.AUTH0_DOMAIN, {
    auth: {
      redirectUrl: redirectURL,
      responseType: 'token',
      params: {
        state,
        analytics: {
          uuid: getVisitorID(),
          // first_url: 'heheheh',
          // first_referrer: 'xyz',
          // last_referrer: 'blah',
          // last_url: 'xyz',
          // num_visits: 2,
          // source: 'Direct Traffic',
          // unique_conversion_events: 'hdhdhd'
        },
        // scope: 'openid email_verified',
      },
    },
    theme: {
      logo: LogoImg,
      primaryColor: '#000'
    },
    languageDictionary: {
      title: 'Serverless'
    }
  })
export default lockInstance
