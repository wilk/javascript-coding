/**
 * Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.
 *
 * Example
 * input
 * 6 4
 * give me one grand today night
 * give one grand today
 *
 * output
 * Yes
 *
 * Example
 * input
 * 6 5
 * two times three is not four
 * two times two is four
 *
 * output
 * No
 */
const canWriteRansomNote = ({m = 1, n = 1, magazine = ['a'], ransom = ['a']}) => { // O(m) + O(n) -> O(m+n) -> O(n)
  let answer = 'No'

  if (n > m) return answer

  const magazineWordsMap = magazine.reduce((map, word) => { // O(m)
      let wordCounter = 1
      if (map.has(word)) { // O(1)
        wordCounter = map.get(word) // O(1)
        wordCounter++
      }
      map.set(word, wordCounter) // O(1)
      return map
    }, new Map()),
    matchedWords = ransom.filter(word => { // O(n)
      if (magazineWordsMap.has(word)) { // O(1)
        let wordCounter = magazineWordsMap.get(word) // O(1)
        if (wordCounter === 0) return false
        wordCounter--
        magazineWordsMap.set(word, wordCounter) // O(1)
        return true
      } else return false
    })

  if (matchedWords.length === ransom.length) answer = 'Yes'

  return answer
}

const magazine = `wi z ne we ebixk yvrd qrd ojckw q xe e bcco xb ieqym dwuu w dnapw achkt xqdhs nstms zmqu csqxi rim tvic arq fvjqx x su ty zl zmah y tv rkjq hpvpx ujj f i u fl iv n mnrvx tho diz k tidi gr ptkq z tho su diz yvrd dwuu dnapw xb arq xb mnrvx xe bcco qrd y ptkq rim fvjqx bcco q q wi i tidi gr mnrvx hpvpx tv f y mnrvx we fvjqx tv f wi ptkq ujj rim ebixk tho ptkq rkjq yvrd dwuu zl ujj zl qrd e ieqym`.split(' '),
  ransom = `dwuu tvic y dnapw ujj tidi nstms x xe achkt x su zmqu iv zmqu xb ojckw we fvjqx tvic tv ne rkjq diz tvic we rkjq nstms zmah ieqym zmah fl xb wi tho x z ty u i gr ptkq q su tho rim tv iv iv yvrd xe qrd y dnapw q zmah arq we ieqym su zl q xb arq rkjq q e xb zl ty fvjqx ptkq ieqym qrd y wi wi nstms diz dnapw zmah q ebixk su e xb q i mnrvx wi x x tidi w ojckw bcco e tv rkjq tho`.split(' '),
  magazine2 = `o l x imjaw bee khmla v o v o imjaw l khmla imjaw x`.split(' '),
  ransom2 = `imjaw l khmla x imjaw o l l o khmla v bee o o imjaw imjaw o`.split(' '),
  magazine3 = 'lol lel meh ghgh asd asd asd asd'.split(' '),
  ransom3 = 'asd asd asd asd'.split(' ')

console.log(canWriteRansomNote({m: 6, n: 4, magazine: ['Give', 'me', 'one', 'gRanD', 'ToDaY', 'nIGHT'], ransom: ['Give', 'me', 'one', 'gRanD']}), 'expected Yes')
console.log(canWriteRansomNote({m: 6, n: 4, magazine: ['Give', 'me', 'one', 'gRanD', 'ToDaY', 'nIGHT'], ransom: ['Give', 'me', 'one', 'granD']}), 'expected No')
console.log(canWriteRansomNote({m: 100, n: 100, magazine, ransom}), 'Expected No')
console.log(canWriteRansomNote({m: 15, n: 17, magazine: magazine2, ransom: ransom2}), 'Expected No')
console.log(canWriteRansomNote({m: 8, n: 2, magazine: magazine3, ransom: ransom3}), 'Expected Yes')