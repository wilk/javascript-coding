/**
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 */

const arr = [1, 2, 3, 4, 5]

let max = 0,
  sum = arr.reduce((sum, el) => {
    sum += el
    return sum
  }, 0),
  min = sum

arr.forEach(el => {
  const result = sum - el

  if (result >= max) max = result
  if (result <= min) min = result
})

console.log(`${min} ${max}`, 'expected 10, 14')