/**
 * Sentry.io script in head
 * For error tracking
 */

let sentry = '<!-- Sentry script here in prod -->' /* noOp for local dev */

if (process.env.NODE_ENV === "production") { // eslint-disable-line
  sentry = `
Raven.config('https://632dbd0e49e646c9b05b34eb1095fdfd@sentry.io/107289').install();
`
}

module.exports = sentry
