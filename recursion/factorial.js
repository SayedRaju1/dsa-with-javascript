/**
 * Factorial of a Number (Recursion)
 *
 * Topic: Recursion
 * Difficulty: Easy
 *
 * Problem:
 * Write a recursive function fact(n) that returns the factorial of a number n.
 *
 * Concepts:
 * - Recursion: Repeatedly multiply n with fact(n - 1).
 * - Base Case: fact(0) = 1 and fact(1) = 1 (stop recursion).
 * - Recursive Case: n * fact(n - 1).
 *
 * Approach:
 * - If n === 0 or n === 1, return 1 (base case).
 * - Else, return n * fact(n - 1).
 *
 * Example:
 * - fact(5) → 5 * 4 * 3 * 2 * 1 → 120
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n), due to recursive call stack
 */

function fact(n) {
  if (n === 0 || n === 1) return 1;
  return n * fact(n - 1);
}

console.log(fact(5)); // 120
