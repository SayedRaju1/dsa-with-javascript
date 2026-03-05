/**
 * Sum of All Numbers in Array Using Recursion
 *
 * Topic: Array (Recursion)
 * Difficulty: Easy
 *
 * Problem:
 * Write a function that calculates the sum of all numbers in an array from index 0
 * to index n using recursion.
 *
 * Requirements:
 * - Use recursion (no loops for the core sum logic).
 * - Sum elements from arr[0] up to and including arr[n].
 *
 * Concepts:
 * - Base case: If n === 0, return arr[0].
 * - Recursive case: Return arr[n] + sum(arr, n - 1).
 *
 * Examples:
 * - arr = [5, 2, 6, 1, 3], sum(arr, 4) → 5 + 2 + 6 + 1 + 3 = 17
 * - arr = [1], sum(arr, 0) → 1
 *
 * Approach:
 * - If n === 0, return arr[0].
 * - Otherwise, return arr[n] + sum(arr, n - 1).
 * - For full-array sum, call with n = arr.length - 1 (and handle empty array).
 *
 * Time Complexity: O(n), one recursive call per element
 * Space Complexity: O(n), due to call stack depth
 */

function sum(arr, n) {
  if (n === 0) return arr[0];
  return arr[n] + sum(arr, n - 1);
}
