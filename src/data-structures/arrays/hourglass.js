const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]

const calculateHourglass = ({x, y}) => {
  let sum = 0
  for (let j = y; j < y + 3; j++) sum += arr[x][j]
  sum += arr[x+1][y+1]
  for (let j = y; j < y + 3; j++) sum += arr[x+2][j]
  return sum
}

let max = -100
for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 3; j++) {
    const result = calculateHourglass({x: i, y: j})
    if (result > max) max = result
  }
}

console.log(max)