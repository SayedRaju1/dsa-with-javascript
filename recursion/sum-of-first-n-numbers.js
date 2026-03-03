/**
 * Sum of First n Numbers
 *
 * Topic: Recursion
 * Difficulty: Easy
 *
 * Problem:
 * Write a function sum(n) that calculates the sum of the first n natural numbers using recursion.
 *
 * Requirements:
 * - Use recursion (function calls itself with a reduced subproblem).
 * - Include a base case to stop recursion and prevent infinite calls.
 *
 * Recursion concepts:
 * - Base case: Stops recursion. Here, if n === 0, return 0.
 * - Recursive case: Return n + sum(n - 1). Each call adds the current n to the sum of the rest.
 *
 * Approach:
 * - Base case: if n === 0, return 0.
 * - Recursive case: return n + sum(n - 1).
 * - This keeps adding numbers until n reaches 0, giving the total sum.
 *
 * Examples:
 * - sum(5) → 5 + 4 + 3 + 2 + 1 = 15
 * - sum(1) → 1
 * - sum(0) → 0
 *
 * Time Complexity: O(n), one call per value from n down to 0
 * Space Complexity: O(n), due to call stack in recursion
 */

function sum(n) {
  if (n === 0) return 0;
  return n + sum(n - 1);
}
