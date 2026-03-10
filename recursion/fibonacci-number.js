/**
 * Fibonacci Number using Recursion
 *
 * Topic: Recursion
 * Difficulty: Easy
 *
 * Problem:
 * Calculate the nth Fibonacci number. The Fibonacci sequence is a mathematical series
 * where each number is the sum of the two preceding ones.
 *
 * Recurrence Relation:
 * - F(0) = 0
 * - F(1) = 1
 * - F(n) = F(n - 1) + F(n - 2) for n > 1
 *
 * Series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 *
 * Approach: Recursion
 * - A function solves the problem by calling itself on smaller sub-problems.
 * - To compute fib(n): get fib(n - 1) and fib(n - 2), then return their sum.
 * - Base cases: if n === 0, return 0; if n === 1, return 1.
 *
 * Sample Outputs:
 * | Input n | Output fib(n) |
 * |---------|---------------|
 * | 0       | 0             |
 * | 1       | 1             |
 * | 2       | 1             |
 * | 3       | 2             |
 * | 5       | 5             |
 * | 6       | 8             |
 * | 7       | 13            |
 * | 10      | 55            |
 *
 * Time Complexity: O(2^n) - each call branches into two calls (binary tree of calls);
 *   many subproblems are solved repeatedly.
 * Space Complexity: O(n) - maximum call stack depth is n.
 */

var fib = function (n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(5)); // 5
console.log(fib(10)); // 55
