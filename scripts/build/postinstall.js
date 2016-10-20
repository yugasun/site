// Post install to build components
var cwd = process.cwd()
const path = require('path')
var exec = require('child_process').exec
var fs = require('fs')
const rimraf = require('rimraf')
const docsConfig = require('../docs/config')
const blogConfig = require('../blog/config')
const docsRepoPath = docsConfig.serverlessRepoPath
const blogRepoPath = blogConfig.blogRepoPath
const seperator = '--------------------------'

if (process.env.IS_NETLIFY_ENV) {
  console.log('in NETLIFY CI context, don\'t clone stuff just download it')
} else {
  // in normal project site. check for serverless and serverless-blog folder
  console.log('Installing external content')
  console.log(seperator)
  var blogExists = fileOrDirExists(blogRepoPath)
  var isBlogGitRepo = fileOrDirExists(path.join(blogRepoPath, '.git'))
  if (!blogExists) {
    // check for git  path.join(blogRepoPath, '.git')
    console.log('No serverless blog repo found. Clone it from github')
    cloneRepo('git@github.com:serverless/blog.git', blogConfig.repoBranch, 'serverless-blog')
  }
  if (blogExists && !isBlogGitRepo) {
    console.log('Blog folder exists but isnt github repo')
    rimraf(blogRepoPath, function () {
      console.log('Empty ./serverless-blog directory and clone repo')
      cloneRepo('git@github.com:serverless/blog.git', blogConfig.repoBranch, 'serverless-blog')
    })
  } else {
    console.log(`Local Blog Repo found ${blogRepoPath}`)
    console.log('To update the blog repo contents git pull from inside ./serverless-blog')
    console.log(seperator)
  }
  var docsExists = fileOrDirExists(docsRepoPath)
  var docsIsGitRepo = fileOrDirExists(path.join(docsRepoPath, '.git'))
  if (!docsExists) {
    // check for git  path.join(blogRepoPath, '.git')
    console.log('No serverless docs repo found. Clone it from github')
    console.log(seperator)
    console.log('NOTE: serverless docs repo is big. Might take a minute to download')
    console.log(seperator)
    cloneRepo('git@github.com:serverless/serverless.git', docsConfig.repoBranch, 'serverless')
  }
  if (docsExists && !docsIsGitRepo) {
    console.log('Docs folder exists but isn\'t github repo')
    rimraf(docsRepoPath, function () {
      console.log('Empty ./serverless directory and clone repo')
      cloneRepo('git@github.com:serverless/serverless.git', docsConfig.repoBranch, 'serverless')
    })
  } else {
    console.log(`Local Docs Repo found ${docsRepoPath}`)
    console.log('To update the docs repo contents git pull from inside ./serverless')
    console.log(seperator)
  }
}

function cloneRepo (repo, branch, path) {
  const finalPath = (path) ? ` ${path}` : ''
  var command = `git clone -b ${branch} ${repo}${finalPath}`
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
    console.log(seperator)
  })
}

function fileOrDirExists (filePath) {
  // console.log(filePath)
  try {
    fs.statSync(filePath)
    return true
  } catch (err) {
    return false
  }
}
