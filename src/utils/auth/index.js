/*eslint-disable*/
/* TODO: remove in favor of redux auth */
import AuthService from './AuthService'
import { initializeXsrfToken } from './xsrfToken'

if (!process.env.AUTH0_CLIENT_ID) {
  throw new Error('AUTH_CLIENT_ID is not defined in .env file')
}
if (!process.env.AUTH0_DOMAIN) {
  throw new Error('AUTH_DOMAIN is not defined in .env file')
}

initializeXsrfToken()

const auth = new AuthService(process.env.AUTH0_CLIENT_ID, process.env.AUTH0_DOMAIN)

export default auth
