/**
interval(function(){
  console.log('go')
}, 1000, 10);
*/
/*
$n = 1
variable = [];
variable[$n] = window.setTimeout( function () { alert('hi') },2000);
*/
var timer
export default function interval (func, wait, times) {
  var interv = (function (w, t) {
    return function () {
      if (typeof t === 'undefined' || t-- > 0) {
        timer = setTimeout(interv, w)
        try {
          func.call(null) // eslint-disable-line
        } catch (e) {
          t = 0
          throw e.toString()
        }
      }
    }
  }(wait, times))
  timer = setTimeout(interv, wait)
  return timer
}
