/**
 * Delete service workers from site
 */
export default function deleteServiceWorkers() {
  if (typeof navigator !== 'undefined' && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (let registration of registrations) { // eslint-disable-line
        registration.unregister()
      }
    }).then(() => {
      if (process.env.NODE_ENV !== 'production') {
        console.log('sw deleted') // eslint-disable-line
      }
    })
  }
}
