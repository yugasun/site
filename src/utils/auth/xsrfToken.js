import { setItem, getItem } from '../storage'

const XSRF_TOKEN = 'xsrf_token'

const generateXsrfToken = () => (
  Math.random().toString(36).slice(2)
)

const setXsrfToken = () => {
  const newXsrfToken = generateXsrfToken()
  setItem(XSRF_TOKEN, newXsrfToken)
}

export const getXsrfToken = () => {
  return getItem(XSRF_TOKEN)
}

export const initializeXsrfToken = () => {
  if (!getXsrfToken()) {
    setXsrfToken()
  }
}

/*  const { authenticated, reason } = parseAuthHash(location.hash);
export function parseAuthHash (hash) {
  const authResult = new Auth0({
    clientID: CLIENT_ID,
    domain: DOMAIN,
  }).parseHash(hash);

  if (!authResult.idTokenPayload.email_verified) {
    return { authenticated: false, reason: 'email-not-verified' };
  }

  if (authResult && authResult.idToken && authResult.state === getXsrfToken()) {
    setAuthToken(authResult.idToken);
    return { authenticated: true };
  }

  return { authenticated: false, reason: 'invalid-token' };
}
*/
