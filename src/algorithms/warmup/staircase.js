/**
 * Consider a staircase of size :

    #
   ##
  ###
 ####

 Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

 Write a program that prints a staircase of size n.
 */

const n = 100

for (let row = 0; row < n; row++) {
  const guard = n - row - 1,
    stairStep = []

  for (let col = 0; col < n; col++) {
    let symbol = ' '
    if (col >= guard) symbol = '#'

    stairStep.push(symbol)
  }

  console.log(stairStep.join(''))
}