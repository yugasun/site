/*
  Get referral data
*/
const isExternalReferrer = () => {
  if (document.referrer) {
    const port = window.document.location.port
    let ref = document.referrer.split('/')[2]
    if (port) {
      ref = ref.replace(`:${port}`, '')
    }
    // console.log('ref', ref)
    // console.log('host', window.location.hostname)
    return ref !== window.location.hostname
  }
  return false
}
/*
function removeProtocol(href) {
  return href.replace(/.*?:\/\//g, '')
}*/

export default isExternalReferrer
