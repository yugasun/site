module.exports = function traverse (x, level) {
  if (isArray(x)) {
    traverseArray(x, level)
  } else if ((typeof x === 'object') && (x !== null)) {
    traverseObject(x, level)
  } else {
    console.log(level + x)
  }
}

function isArray (o) {
  return Object.prototype.toString.call(o) === '[object Array]'
}

function traverseArray (arr, level) {
  console.log(level + '<array>')
  arr.forEach(function (x) {
    traverse(x, level + '  ')
  })
}

function traverseObject (obj, level) {
  console.log(level + '<object>')

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(level + '  ' + key + ':')
      traverse(obj[key], level + '    ')
    }
  }

  if (obj.hasOwnProperty('children')) {
    console.log(obj['children'])
    traverse(obj['children'], level + '    ')
  }
}
