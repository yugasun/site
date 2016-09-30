/**
 * Project config
 * NOTE: No private data/keys should be stored here.
 */
module.exports = function siteConfig (isProduction) {
  return (
    {
      SITENAME: process.env.SITENAME || 'serverless',
      TWITTER: process.env.TWITTER || 'goServerless',
      GITHUB: process.env.GITHUB || 'serverless',
      GOOGLE_ANALYTICS_UA: (isProduction) ? 'UA-79510184-1' : null,
      AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID || 'oXN9xzJCJAU5BJxftjS4DbGN5hNhGnhk',
      AUTH0_DOMAIN: process.env.AUTH0_CLIENT_ID || 'serverlessdev.auth0.com',
      ALGOLIA_ADMIN: process.env.ALGOLIA_ADMIN || '1f21cf7b86876a3ac23e35b2657894aa',
      ERROR_ENDPOINT: 'https://h413evrxuk.execute-api.us-west-2.amazonaws.com/dev/report'
    }
  )
}
