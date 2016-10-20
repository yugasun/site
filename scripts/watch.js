const path = require('path')
const watch = require('watch')
const exec = require('child_process').exec
const cwd = process.cwd()
// const execSync = require('child_process').execSync
// var child = execSync('ls', { encoding: 'utf-8' }).trim();
const serverlessDocs = path.join(__dirname, '..', 'serverless', 'docs')

watch.createMonitor(serverlessDocs, function (monitor) {
  monitor.on('created', function (f, stat) {
    // Handle new files
  })
  monitor.on('changed', function (f, curr, prev) {
    // Handle file changes
    console.log('changed file', f)

    var command = 'npm run prepContent'
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
    // trigger pipepline
  })
  monitor.on('removed', function (f, stat) {
    // Handle removed files
  })
  // monitor.stop(); // Stop watching
})
