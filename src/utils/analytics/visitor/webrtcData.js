export default function webrtcInfo (cb) {
  var output = {
    enumeration: false
  }
  const mediaStream = window.MediaStreamTrack
  if (mediaStream && mediaStream.getSources !== 'undefined') {
    mediaStream.getSources(function (sources) {
      output.sources = sources
      output.enumeration = true
      cb(output)
    })
  } else {
    cb(output)
  }
}
