/**
 Given an array of integers, calculate which fraction of its elements are positive, which fraction of its elements are negative, and which fraction of its elements are zeroes, respectively. Print the decimal value of each fraction on a new line.

 Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.
 */

const n = 6,
  arr = [-4, 3, -9, 0, 4, 1],
  //arr = [0, 0, 0, 0, 0, 0],
  {positives, negatives, zeros} = arr.reduce((acc, el) => {
    if (el > 0) acc.positives++
    else if (el < 0) acc.negatives++
    else acc.zeros++

    return acc
  }, {positives: 0, negatives: 0, zeros: 0})

console.log(positives / n)
console.log(negatives / n)
console.log(zeros / n)