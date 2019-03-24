const download = require('download')

// if datatime > x redownload
module.exports = function downloadDocs(downloadUrl, outputPath, callBack) {
  const downloadOptions = {
    timeout: 30000,
    extract: true,
    strip: 1,
    mode: '755',
  }
  download(downloadUrl, outputPath, downloadOptions)
    .then(() => {
      callBack && callBack(null)
    })
    .catch(error => {
      if (error) {
        console.log(`download fail! ${downloadUrl}`)
        callBack(error)
      }
    })
}
