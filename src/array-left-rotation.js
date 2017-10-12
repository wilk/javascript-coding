/**
 * left rotate k-times a list of n elements
 *
 * example:
 *
 * list = [1,2,3,4,5]
 * n = 5
 * k = 3
 *
 * result = [4,5,1,2,3]
 */

// O(n) linear
const rotateLeft = ({n = 1, k = 1, list = [0]}) => {
  const result = []

  for (let i = 0; i < k; i++) result.push(list.shift()) // O(k) * (O(1) + O(1)) -> O(k)
  n = list.length
  for (let i = 0; i < n; i++) result.unshift(list.pop()) // O(n-k) * (O(1) + O(1)) -> O(n-k)

  return result // O(k) + O(n-k) -> O(n)
}

const result = rotateLeft({n: 5, k: 3, list: [1,2,3,4,5]})
console.log(`[1,2,3,4,5] -> ${result.join(' ')}`)