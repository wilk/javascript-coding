/**
 * Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.
 *
 * Example:
 * a: cde
 * b: abc
 * distance: 4
 * because c, d (from a) and a, b (from b) are unique to each other
 */
const distanceToAnagrams = ({a = 'a', b = 'a'}) => { // O(n) + O(n) -> O(2n) -> O(n)
  let commonLettersCounters = new Map(),
    distance = a.length

  // O(n)
  for (let i = 0; i < a.length; i++) { // O(n)
    const letter = a[i]
    let lettersCounter = 1
    if (commonLettersCounters.has(letter)) lettersCounter += commonLettersCounters.get(letter) // O(1) + O(1) -> O(1)
    commonLettersCounters.set(letter, lettersCounter) // O(1)
  }

  // O(n)
  for (let i = 0; i < b.length; i++) {
    const letter = b[i]
    if (commonLettersCounters.has(letter)) { // O(1)
      let lettersCounter = commonLettersCounters.get(letter) // O(1)
      if (lettersCounter === 0) distance++
      else {
        lettersCounter--
        commonLettersCounters.set(letter, lettersCounter) // O(1)
        distance--
      }
    } else distance++
  }

  return distance
}

const a = 'acddhbadzo',
  b = 'doahhdzqr'

console.log(a, b, distanceToAnagrams({a, b}), `expected 7`)