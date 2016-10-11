// Post install to build components
var cwd = process.cwd()
var path = require('path')
var exec = require('child_process').exec

if (process.env.NETLIFY_ENV) {
  console.log('in NETLIFY_ENV context')
  // do stuff
  var webpackPath = path.resolve('node_modules', '.bin', 'phenomic')
  var command = webpackPath + ' build'
  var child = exec(command, {cwd: cwd}, function (error, stdout, stderr) {
    if (error) {
      console.warn(error)
    }
    console.log(stdout)
    console.log('Built components for consumer app')
  })
  child.stdout.on('data', function (data) {
    console.log('stdout: ' + data)
  })
  child.stderr.on('data', function (data) {
    console.log('stdout: ' + data)
  })
  child.on('close', function (code) {
    console.log('closing code: ' + code)
  })
} else {
  console.log('local context do normal build')
}
