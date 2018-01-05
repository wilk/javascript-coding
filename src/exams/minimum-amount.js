const calculateAmount = prices => {
  let min = prices[0]
  let amount = prices[0]

  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] < min) min = prices[i - 1]
    if (prices[i] > min) amount += prices[i] - min
  }

  return amount
}

console.log(calculateAmount([1,2,3,4]))
console.log(calculateAmount([4,9,2,3]))