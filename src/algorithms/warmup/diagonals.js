/**
 * Calculate the two diagonals sums and then the absolute sum of their difference
 */
const n = 3,
  a = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
  ]

/*const n = Math.floor(Math.random() * 100)

const a = []
for (let row = 0; row < n; row++) {
  a[row] = []
  for (let col = 0; col < n; col++) {
    a[row].push(Math.floor(Math.random() * 100))
  }
}*/

let firstDiagonalSum = 0,
  secondDiagonalSum = 0
// first diagonal
for (let row = 0; row < n; row++) {
  firstDiagonalSum += a[row][row]
  secondDiagonalSum += a[row][n - row - 1]
}

const absSum = Math.abs(firstDiagonalSum - secondDiagonalSum)
console.log(absSum, 'expected 15')
//console.log(absSum)