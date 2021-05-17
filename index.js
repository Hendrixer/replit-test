const debounce = (fn, time) => {
  let timeId
  return function() {
    if (timeId) {
      clearTimeout(timeId)
    }

    timeId = setTimeout(() => {
      fn.apply(this, arguments)
      timeId = null
    }, time)
  }
}

const flatten = (array) => array.reduce((result, item) => {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item))
    } else {
      result.push(item)
    }
    return result
  }, [])
}

console.log(flatten([1, 2, [3, 4,[5, 6, [7]], 8], 9, 10]))