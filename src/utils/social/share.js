
export function twitterShare (text, url, hashtags) {
  let hash = ''
  const base = `http://twitter.com/share?text=${fixedEncodeURI(text)}`
  const link = (url) ? `&url=${url}` : ''
  if (hashtags) {
    if (typeof hashtags === 'string') {
      hash = `&hashtags=${hashtags}`
    } else {
      hash = `&hashtags=${hashtags.join(',')}`
    }
  }
  return `${base}${link}${hash}`
}

function fixedEncodeURI (str) {
  return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']')
}
