const n = 9,
  list = Array.from('0'.repeat(n)).map(Number),
  /*operations = [
    {a: 1, b: 2, k: 100},
    {a: 2, b: 5, k: 100},
    {a: 3, b: 4, k: 100},
    {a: 1, b: 2, k: 300},
    {a: 5, b: 5, k: 700}
  ],
  operations = [
    {a: 3, b: 5, k: 100},
    {a: 1, b: 2, k: 100},
    {a: 2, b: 3, k: 100},
    {a: 5, b: 5, k: 100},
    {a: 1, b: 1, k: 100},
    {a: 4, b: 5, k: 100},
    {a: 3, b: 4, k: 100},
    {a: 2, b: 4, k: 100}
  ]*/
operations = [{a:2,b:3,k:100},{a:6,b:7,k:100}]

let max = 0
operations.forEach(({a, b, k}) => {
  list[a-1] += k
  if (b < n) list[b] -= k
  console.log(list)
})

let sum = max
for (let el of list) {
  sum += el
  if (max < sum) max = sum
}

console.log(max)
