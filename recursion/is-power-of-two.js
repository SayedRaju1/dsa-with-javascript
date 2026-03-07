/**
 * Is Power of Two
 *
 * Topic: Recursion
 * Difficulty: Easy
 *
 * Problem:
 * Write a recursive function isPowerOfTwo(n) that returns true if n is a power of 2, otherwise false.
 *
 * Concepts:
 * - Power of Two Definition: A number is a power of 2 if it can be divided by 2 repeatedly until it reaches 1.
 * - Base Case: n === 1 → true (if n becomes 1, it is a power of 2).
 * - Invalid Case: n < 1 or n % 2 !== 0 → false (if n is less than 1 or is odd during the process, it's not a power of 2).
 * - Recursive Case: isPowerOfTwo(n / 2) (recurse with n divided by 2).
 *
 * Examples:
 * - isPowerOfTwo(8) → true  (8 → 4 → 2 → 1)
 * - isPowerOfTwo(18) → false
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(log n), due to recursion stack
 */

function isPowerOfTwo(n) {
  if (n === 1) return true;
  else if (n < 1 || n % 2 !== 0) return false;
  return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(18)); // false
