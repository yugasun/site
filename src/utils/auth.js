import AuthService from './AuthService'

if (!process.env.AUTH0_CLIENT_ID) { // eslint-disable-line
  throw new Error('AUTH_CLIENT_ID is not defined in .env file')
}
if (!process.env.AUTH0_DOMAIN) { // eslint-disable-line
  throw new Error('AUTH_DOMAIN is not defined in .env file')
}

const auth = new AuthService(process.env.AUTH0_CLIENT_ID, process.env.AUTH0_DOMAIN) // eslint-disable-line

export default auth
