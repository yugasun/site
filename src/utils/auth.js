import AuthService from './AuthService'

if (!__AUTH0_CLIENT_ID__) { // eslint-disable-line
  throw new Error('AUTH_CLIENT_ID is not defined in .env file')
}
if (!__AUTH0_DOMAIN__) { // eslint-disable-line
  throw new Error('AUTH_DOMAIN is not defined in .env file')
}

const auth = new AuthService(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__) // eslint-disable-line

export default auth
