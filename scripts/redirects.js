/**
 * Handle site redirects
 * 
 */
var path = require('path')
var copyFiles = require('./utils/copy-files')
var redirectFile = path.join(__dirname, '..', 'src', '_redirects')
var destinationPath = path.join(__dirname, '..', 'dist', '_redirects')

copyFiles(redirectFile, destinationPath)
