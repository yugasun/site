// Post install to build components
var cwd = process.cwd()
var path = require('path')
var exec = require('child_process').exec

if (cwd.indexOf('node_modules') > -1) {
  console.log('in node_modules context')
  // do stuff
  var webpackPath = path.resolve(cwd, 'node_modules', '.bin', 'webpack')
  var command = webpackPath + ' --display-chunks --color --config webpack.config.components.babel.js'
  exec(command, {cwd: cwd}, function (error, stdout, stderr) {
    if (error) {
      console.warn(error)
    }
    console.log(stdout)
    console.log('Built components for consumer app')
  })
} else {
  console.log('site')
}
