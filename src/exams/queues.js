/**
 * In this challenge, you must first implement a queue using two stacks. Then process q queries, where each query is one of the following 3 types:

 1 x: Enqueue element x into the end of the queue.
 2: Dequeue the element at the front of the queue.
 3: Print the element at the front of the queue.

 Input:
 10 (number of ops)
 1 42 (enqueue 42) -> [42]
 2 (dequeue the front) -> []
 1 14 () -> [14]
 3
 1 28
 3
 1 60
 1 78
 2 (dequeue the front)
 2 (dequeue the front)
 Output:
 14
 14
 */
const processQueries = input => {
  input = input.split('\n')

  input.shift()

  // this is not a valid solution
  // the solution requires a queue implemented with two stacks
  const queue = [],
    queries = {'1': queue.push, '2': queue.shift, '3': _ => console.log(queue[0])}
  for (let row of input) {
    if (row.startsWith('1')) queries['1'].bind(queue)(row.split(' ')[1])
    else queries[row].bind(queue)()
  }
}

console.log(processQueries('10\n1 42\n2\n1 14\n3\n1 28\n3\n1 60\n1 78\n2\n2'), 'expected 14\n14')
console.log(processQueries('10\n1 881150707\n3\n1 201379296\n3\n1 488323496\n3\n1 701576540\n3\n1 933404232\n3'), 'expected 881150707\n881150707\n881150707\n881150707\n881150707')