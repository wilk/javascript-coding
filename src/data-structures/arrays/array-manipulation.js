const n = 5,
  list = Array.from('0'.repeat(n)).map(Number),
  operations = [
    {a: 1, b: 2, k: 100},
    {a: 2, b: 5, k: 100},
    {a: 3, b: 4, k: 100},
    {a: 1, b: 2, k: 300},
    {a: 5, b: 5, k: 700}
  ]

let max = 0
operations.forEach(({a, b, k}) => {
  if (k === 0) return

  a--
  b--

  let index = a
  do {
    list[index] += k
    if (list[index] > max) max = list[index]
    index++
  } while (index <= b)
})

console.log(max)