const maxDifference = a => {
  const max = {
    value: a[0],
    index: 0
  }
  const min = {
    value: a[0],
    index: 0
  }
  let diff = -1

  for (let i = 1; i < a.length; i++) {
    if (a[i] > max.value) {
      max.value = a[i]
      max.index = i
    }

    if (a[i] < min.value) {
      min.value = a[i]
      min.index = i
    }

    if (max.index > min.index && max.value > min.value) {
      if ((max.value - min.value) > diff) diff = max.value - min.value
    }
    else {
      max.value = min.value
      max.index = min.index
    }
  }

  return diff

  // first non-working draft
  /*let max = a[0]
  let maxIndex = 0

  while (maxIndex === 0 && a.length > 0) {
    for (let i = 1; i < a.length; i++) {
      if (a[i] > max) {
        max = a[i]
        maxIndex = i
      }
    }

    if (maxIndex === 0) {
      a.splice(0, 1)
      max = a[0]
    }
  }

  let min = a[0]
  let minIndex = 0
  for (let i = 1; i < maxIndex; i++) {
    if (a[i] < min) {
      min = a[i]
      minIndex = i
    }
  }

  return (minIndex < maxIndex && min < max) ? max-min : -1*/
}

console.log(maxDifference([4,1,2,3]))
console.log(maxDifference([2,3,10,2,4,8,1]))
console.log(maxDifference([7,9,5,6,3,2]))
console.log(maxDifference([10,8,7,6,5]))