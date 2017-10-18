/**
 * Consider an array of n integers, A = [a1, a2, ... an], where all but one of the integers occur in pairs. In other words, every element in A occurs exactly twice except for one unique element.
 * Example:
 * Input:
 * 1
 * Output:
 * 1
 *
 * Example:
 * Input:
 * 1 1 2
 * Output:
 * 2
 *
 * Example:
 * Input:
 * 0 0 1 2 1
 * Output:
 * 2
 */
const findUnique = (list = [0]) => { // O(n) + O(n) -> O(n)
  const duplicates = list.reduce((map, el) => { // O(n)
    let duplicate = map.get(el)
    if (!duplicate) duplicate = 0

    duplicate++

    map.set(el, duplicate)

    return map
  }, new Map())

  let unique
  for (let [key, value] of duplicates.entries()) { // O(n/2 + 1) -> O(n)
    if (value % 2 !== 0) {
      unique = key
      break
    }
  }

  return unique
}

console.log(findUnique([0]), 'expected 0')
console.log(findUnique([0,0,1,2,2]), 'expected 1')
console.log(findUnique([0,0,0,0,0]), 'expected 0')
console.log(findUnique([0,1,2,3,2,1,0]), 'expected 3')