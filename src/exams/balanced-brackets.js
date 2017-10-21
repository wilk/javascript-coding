/**
 * Given  strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced, print YES on a new line; otherwise, print NO on a new line.
 *
 * Example:
 * Input
 * 3
 * {[()]}
 * {[(])}
 * {{[[(())]]}}
 * Output
 * YES
 * NO
 * YES
 */

const BRACKET_TYPES = {
  '{': 'curly',
  '}': 'curly',
  '[': 'squared',
  ']': 'squared',
  '(': 'bracket',
  ')': 'bracket'
}

const BRACKET_DIRECTION = {
  '{': 'opening',
  '[': 'opening',
  '(': 'opening',
  ')': 'closing',
  ']': 'closing',
  '}': 'closing'
}

class Node {
  constructor({char, children = [], parent = null}) {
    this.char = char
    this.type = BRACKET_TYPES[char]
    this.direction = BRACKET_DIRECTION[char]
    this.children = children
    this.parent = parent
  }
}

const buildExpressionTree = ({prevNode, char, counter, result}) => {
  const currentNode = new Node({char})

  if (currentNode.direction === 'opening' && prevNode.direction === 'opening') {
    prevNode.children.push(currentNode)
    currentNode.parent = prevNode
    prevNode = currentNode
    counter++

    return {prevNode, counter, result}
  }

  if (currentNode.direction === 'opening' && prevNode.direction === 'closing') {
    prevNode.parent.children.push(currentNode)
    currentNode.parent = prevNode.parent
    prevNode = currentNode
    counter++

    return {prevNode, counter, result}
  }

  if (currentNode.direction === 'closing' && prevNode.direction === 'opening' && prevNode.type === currentNode.type) {
    prevNode.parent.children.push(currentNode)
    currentNode.parent = prevNode.parent
    prevNode = currentNode
    counter--

    return {prevNode, counter, result}
  }

  if (currentNode.direction === 'closing' && prevNode.direction === 'opening' && prevNode.type !== currentNode.type) {
    result = 'NO'

    return {prevNode, counter, result}
  }

  if (currentNode.direction === 'closing' && prevNode.direction === 'closing' && prevNode.parent.type !== currentNode.type) {
    result = 'NO'

    return {prevNode, counter, result}
  }

  if (currentNode.direction === 'closing' && prevNode.direction === 'closing' && prevNode.parent.type === currentNode.type) {
    prevNode.parent.parent.children.push(currentNode)
    currentNode.parent = prevNode.parent.parent
    prevNode = currentNode
    counter--

    return {prevNode, counter, result}
  }
}

const checkBalancedExpression = (expression = '{') => { // O(n)
  let rootNode = new Node({char: 'root'}),
    currentNode = new Node({char: expression[0]}),
    result = 'YES',
    counter = 1

  currentNode.children.push(currentNode)
  currentNode.parent = rootNode

  let info = {prevNode: currentNode, result, counter}
  for (let i = 1; i < expression.length; i++) {
    info.char = expression[i]
    info = buildExpressionTree(info) // O(1)
    if (info.result === 'NO') break
  }

  if (info.counter === 0 && info.result === 'YES') return 'YES'
  else return 'NO'
}

const expression1 = '{',
  expression2 = '(]',
  expression3 = '{{[[(())]]}}',
  expression4 = '{{{{{',
  expression5 = '({{}[]([])})',
  expression6 = '({(}[)])',
  expression7 = '{{{{{{',
  expression8 = ']]]]]',
  expression9 = '{([([[](){()}]())][][[]])}'
console.log(checkBalancedExpression(expression1), 'expected NO')
console.log(checkBalancedExpression(expression2), 'expected NO')
console.log(checkBalancedExpression(expression3), 'expected YES')
console.log(checkBalancedExpression(expression4), 'expected NO')
console.log(checkBalancedExpression(expression5), 'expected YES')
console.log(checkBalancedExpression(expression6), 'expected NO')
console.log(checkBalancedExpression(expression7), 'expected NO')
console.log(checkBalancedExpression(expression8), 'expected NO')
console.log(checkBalancedExpression(expression9), 'expected YES')