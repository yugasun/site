if (process.env.NODE_ENV === 'production') {
  console.log('prod store added')
  module.exports = require('./store.prod')
} else {
  module.exports = require('./store.dev')
}
