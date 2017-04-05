/**
 * Project config
 * NOTE: No private data/keys should be stored here.
 */
module.exports = function siteConfig(isProduction) {
  return (
    {
      SITENAME: process.env.SITENAME || 'serverless',
      TWITTER: process.env.TWITTER || 'goServerless',
      GITHUB: process.env.GITHUB || 'serverless',
      GOOGLE_ANALYTICS_UA: (isProduction) ? 'UA-79510184-1' : 'dev',
      AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID || 'qaNtBzG1CGp0vYzDGl9O32nsh5VNw20r',
      AUTH0_DOMAIN: process.env.AUTH0_DOMAIN || 'serverlessqa.auth0.com',
      ALGOLIA_ADMIN: process.env.ALGOLIA_ADMIN || '1f21cf7b86876a3ac23e35b2657894aa',
      SEGMENT_KEY: process.env.SEGMENT_KEY || 'gNftvcGllpKZTe5PcAxF8pEoenLq32H0',
      CUSTOMER_IO_KEY: process.env.CUSTOMER_IO_KEY || '219fca0102ab3451a96a',
      /* Serverless API Gateway Endpoints */
      API: {
        ERROR: 'https://h413evrxuk.execute-api.us-west-2.amazonaws.com/dev/report',
        NEWSLETTER: 'https://3upqirwiuc.execute-api.us-west-2.amazonaws.com/dev/subscribe'
      }
    }
  )
}
