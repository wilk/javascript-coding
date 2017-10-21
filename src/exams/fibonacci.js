/**
 * Locked stub code in the editor reads a single integer denoting the value of  and passes it to the fibonacci function.
 * Example:
 * Input: 3
 * Output: 2
 * Explanation: fib(3) -> fib(2) + fib(1) -> fib(1) + fib(0) + 1 -> 1 + 0 + 1 -> 2
 */
const fibonacci = n => {
  if (n === 0) return 0
  if (n === 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(0), 'expected 0')
console.log(fibonacci(1), 'expected 1')
console.log(fibonacci(3), 'expected 2')
