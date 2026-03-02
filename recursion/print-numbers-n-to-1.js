/**
 * Recursion 101 - Print Numbers from n to 1
 *
 * Topic: Recursion
 * Difficulty: Easy
 *
 * Problem:
 * Print numbers from n down to 1 using recursion.
 *
 * Requirements:
 * - Use recursion (function calls itself).
 * - Include a base condition to stop recursion and avoid stack overflow.
 * - Print the current number, then recurse with num - 1.
 *
 * Recursion concepts:
 * - Recursion breaks a problem into smaller sub-problems by the function calling itself.
 * - Each call is stored in the call stack; without a base condition, the stack grows until
 *   memory is exhausted (stack overflow).
 * - Base condition: stop when num === 0 (or similar) so recursion does not go infinite.
 *
 * Approach:
 * - Base condition: if num === 0, return (stop recursion).
 * - Print the current number.
 * - Recurse with num - 1.
 *
 * Examples:
 * - printDescending(5) → logs 5, 4, 3, 2, 1
 * - printDescending(1) → logs 1
 *
 * Time Complexity: O(n), one function call per number from n to 1
 * Space Complexity: O(n), due to recursive call stack frames
 */

function printDescending(num) {
  if (num === 0) return;
  console.log(num);
  printDescending(num - 1);
}
