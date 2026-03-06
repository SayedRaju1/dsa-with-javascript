/**
 * Sum of Odd Numbers in Array Using Recursion
 *
 * Topic: Array (Recursion)
 * Difficulty: Easy
 *
 * Problem:
 * Write a recursive function that calculates the sum of all odd numbers in an
 * array arr from index 0 up to index n.
 *
 * Requirements:
 * - Use recursion (no loops for the core logic).
 * - Consider only odd numbers (arr[i] % 2 !== 0) in the range [0, n].
 *
 * Concepts:
 * - Base case: If n === 0, return arr[0] if it is odd, otherwise 0.
 * - Recursive case: Return (arr[n] if odd else 0) + sumOfOdd(arr, n - 1).
 *
 * Examples:
 * - arr = [5, 2, 6, 1, 3], sumOfOdd(arr, 4) → 5 + 1 + 3 = 9
 * - arr = [1], sumOfOdd(arr, 0) → 1
 * - arr = [2, 4], sumOfOdd(arr, 1) → 0
 *
 * Approach:
 * - Check if arr[n] is odd (arr[n] % 2 !== 0).
 * - If n === 0, return arr[0] when odd, else 0.
 * - Otherwise return (current element if odd else 0) + sumOfOdd(arr, n - 1).
 * - For full array, call with n = arr.length - 1; handle n < 0 (e.g. empty array) by returning 0.
 *
 * Time Complexity: O(n), one recursive call per index
 * Space Complexity: O(n), due to call stack depth
 */

function sumOfOdd(arr, n) {
  if (n < 0) return 0;
  const isOdd = arr[n] % 2 !== 0;
  if (n === 0) return isOdd ? arr[0] : 0;
  return (isOdd ? arr[n] : 0) + sumOfOdd(arr, n - 1);
}
