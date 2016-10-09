var lookup = require('climb-lookup')
var packageJSONPath = lookup.lookupSync('package.json')
var packageInfo = require(packageJSONPath)

function ComponentUsagePlugin (output, options) {
  this.options = options
}

ComponentUsagePlugin.prototype.apply = function apply (compiler) {
  compiler.plugin('done', function (stats) {
    var data = stats.toJson()
    // data has all files being used in project
    console.log(data)

    // Parse for component files
    // var componentsUsed = getComponentsUsed(data)

    // Send to serverless function
    // sendToAWSLambda(packageInfo, componentsUsed)
  })
}

module.exports = ComponentUsagePlugin
