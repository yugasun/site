import { setItem, getItem } from './storage' // eslint-disable-line

export function initializeRouteListener() { // eslint-disable-line
  /* eslint-disable */
  if (typeof window !== 'undefined') {
    ;(function(history){
      var pushState = history.pushState
      history.pushState = function(state) {
        if (typeof history.onpushstate === 'function') {
          history.onpushstate({state: state})
        }
        // whatever else you want to do
        // maybe call onhashchange e.handler
        return pushState.apply(history, arguments)
      }
    })(window.history)
  }
}

const LAST_PAGE_SEEN = 'last_page_seen'
/* eslint-disable */
export function handleRouteChange(e) {
  const previousURL = window.location.href
  setTimeout(() => {
    const newURL = window.location.href
    const loading = window.location.origin + '/loading/'
    if (newURL === previousURL) {
      return false
    }
    if (newURL === loading || previousURL === loading) {
      return false
    }
    // Set last page viewed for 404 tracker
    setItem(LAST_PAGE_SEEN, previousURL, function(){
      if (process.env.NODE_ENV === 'development') {
        console.log('set LAST_PAGE_SEEN', previousURL)
      }
    })
  }, 0)
}
