/**
 * Sam's house has an apple tree and an orange tree that yield an abundance of fruit. In the diagram below, the red region denotes his house, where  is the start point and  is the end point. The apple tree is to the left of his house, and the orange tree is to its right. You can assume the trees are located on a single point, where the apple tree is at point  and the orange tree is at point .
 * When a fruit falls from its tree, it lands  units of distance from its tree of origin along the -axis. A negative value of  means the fruit fell  units to the tree's left, and a positive value of  means it falls  units to the tree's right.

 Given the value of  for  apples and  oranges, can you determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range )? Print the number of apples that fall on Sam's house as your first line of output, then print the number of oranges that fall on Sam's house as your second line of output.


 Input Format

 The first line contains two space-separated integers denoting the respective values of  and .
 The second line contains two space-separated integers denoting the respective values of  and .
 The third line contains two space-separated integers denoting the respective values of  and .
 The fourth line contains  space-separated integers denoting the respective distances that each apple falls from point .
 The fifth line contains  space-separated integers denoting the respective distances that each orange falls from point .

 Example:
 Input:
 7 11 -> from 7 to 11
 5 15 -> apple in 5, orange in 15
 3 2 -> 3 apples, 2 oranges
 -2 2 1 -> 5 - 2 = 3 X, 5 + 2 = 7 V, 5 + 1 = 6 X
 5 -6 -> 15 + 5 = 20 X, 15 - 6 = 9 V

 Output:
 1
 1
 */

const apple = [-2, 2, 1],
  orange = [5, -6],
  s = 7,
  t = 11,
  a = 5,
  b = 15

const checkPosition = (tree, pos, amount) => {
  const position = tree + pos
  if (position >= s && position <= t) amount++
  return amount
}

const applesAmount = apple.reduce((amount, appl) => {
  amount = checkPosition(a, appl, amount)
  return amount
}, 0)

const orangesAmount = orange.reduce((amount, orang) => {
  amount = checkPosition(b, orang, amount)
  return amount
}, 0)

console.log(applesAmount)
console.log(orangesAmount)