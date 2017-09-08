/**
 * Segment.io script in head
 */

let optimizelyScript = '<!-- optimizely script here in prod -->' /* noOp for local dev */

if (process.env.NODE_ENV === "production") { // eslint-disable-line
  optimizelyScript = `<script src="https://cdn.optimizely.com/js/8666216231.js"></script>`
}
module.exports = optimizelyScript
