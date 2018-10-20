const dir = require('node-dir')
const fs = require('fs-extra')
const async = require('async')

//TODO: doing two things - refactor to take single responsibility
module.exports = function copyMdFiles(repoPath, destinationPath, callback) {
    dir.readFiles(repoPath, {
        match: /.md$/,
        exclude: ['.github']
        }, (err, content, next) => next(),
        function(err, files){
            if (err) throw err
            async.each(files, (name, eachCallback) => {
                const fileFolderName = name.split('/').reverse()[1]
                const newFileName = `${fileFolderName}.md`
                const newFilePath = `${destinationPath}/${newFileName}`
        
                fs.copy(name, newFilePath, (err) => {
                    if (err) eachCallback(err)
                    eachCallback()
                })
            }, (err) => {
                if(err) {
                    callback(err)
                } else {
                    callback(null)
                }
            })
      })
}
