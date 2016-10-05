
const XSRF_TOKEN = 'xsrf_token'

const generateXsrfToken = () => (
  Math.random().toString(36).slice(2)
)

const setXsrfToken = () => {
  const newXsrfToken = generateXsrfToken()
  window.localStorage.setItem(XSRF_TOKEN, newXsrfToken)
}

export const getXsrfToken = () => {
  return window.localStorage.getItem(XSRF_TOKEN)
}

export const initializeXsrfToken = () => {
  if (!getXsrfToken()) {
    setXsrfToken()
  }
}
