// Post install to build components
var cwd = process.cwd()
const path = require('path')
var exec = require('child_process').exec
var fs = require('fs')
const rimraf = require('rimraf')
const docsRepoPath = require('../docs/config').serverlessRepoPath
const blogRepoPath = require('../blog/config').blogRepoPath

if (process.env.IS_NETLIFY_ENV) {
  console.log('in CI context, dont clone stuff just download it')
} else {
  console.log('in normal project site. check for serverless and serverless-blog folder')
  var blogExists = fileOrDirExists(blogRepoPath)
  var isBlogGitRepo = fileOrDirExists(path.join(blogRepoPath, '.git'))
  if (!blogExists) {
    // check for git  path.join(blogRepoPath, '.git')
    console.log('no serverless blog repo found. git clone it')
    cloneRepo('git@github.com:serverless/blog.git', 'serverless-blog')
  }
  if (blogExists && !isBlogGitRepo) {
    console.log('folder exists but isnt git rep')
    rimraf(blogRepoPath, function () {
      console.log('empty serverless blog directory and clone repo')
      cloneRepo('git@github.com:serverless/blog.git', 'serverless-blog')
    })
  }

  var docsExists = fileOrDirExists(docsRepoPath)
  var docsIsGitRepo = fileOrDirExists(path.join(docsRepoPath, '.git'))
  if (!docsExists) {
    // check for git  path.join(blogRepoPath, '.git')
    console.log('No serverless local docs repo found. git clone it')
    console.log('NOTE: serverless docs repo is big. Might take a minute to download')
    cloneRepo('git@github.com:serverless/serverless.git', 'serverless')
  }
  if (docsExists && !docsIsGitRepo) {
    console.log('folder exists but isnt git rep')
    rimraf(docsRepoPath, function () {
      console.log('empty serverless docs directory and clone repo')
      cloneRepo('git@github.com:serverless/serverless.git', 'serverless')
    })
  }
}

function cloneRepo (repo, path) {
  const finalPath = (path) ? ` ${path}` : ''
  var command = `git clone ${repo}${finalPath}`
  var child = exec(command, {cwd: cwd}, function (error, stdout, stderr) {
    if (error) {
      console.warn(error)
    }
    console.log(stdout)
  })
  child.stdout.on('data', function (data) {
    console.log(data)
  })
  child.stderr.on('data', function (data) {
    console.log(data)
  })
  child.on('close', function (code) {
    console.log(`${repo} successfully cloned`)
  })
}

function fileOrDirExists (filePath) {
  console.log(filePath)
  try {
    fs.statSync(filePath)
    return true
  } catch (err) {
    return false
  }
}
