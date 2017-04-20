/* eslint-disable no-console */
import removeUTM from './source/removeUTM'
const isProduction = process.env.NODE_ENV === 'production'

export default function page(opts) {
  const options = opts || {}
  if (typeof window === 'undefined') {
    return false
  }
  if (window.location.href.indexOf(`${window.location.origin}/loading`) > -1) {
    // loading screen exit early
    return false
  }

  const pageData = {
    width: options.width || window.innerWidth,
    height: options.height || window.innerHeight,
    path: options.path || window.location.pathname,
    url: options.url || window.location.href
  }

  if (document.referrer && document.referrer !== '') {
    pageData.referrer = document.referrer
  }

  // Trigger google analytics
  if (typeof ga !== 'undefined') {
    if (isProduction) {
      console.info(`GA Pageview > ${window.location.href}`)
      ga('set', 'page', pageData.path) // eslint-disable-line
      ga('send', 'pageview', { hitCallback: removeUTM }) // eslint-disable-line
    } else {
      console.info(`GA Pageview > ${window.location.href}`)
      setTimeout(removeUTM, 0)
    }
  }
  // Trigger customer io
  if (typeof _cio !== 'undefined') {
    if (isProduction) {
      console.info(`Customer.io Pageview > ${window.location.href}`)
      _cio.page(document.location.href, pageData) // eslint-disable-line
    } else {
      console.info(`Customer.io Pageview > ${window.location.href}`)
    }
  }
  // Trigger hubspot page view
  if (typeof _hsq !== 'undefined') {
    console.info(`Hubspot Pageview > ${window.location.href}`)
    _hsq.push(['trackPageView']) // eslint-disable-line
  }
}
