/**
 * NamasteDev.com - Count Negative
 *
 * Topic: Array
 * Difficulty: Easy
 *
 * Problem:
 * Given an array arr of numbers, return the count of elements strictly less than 0.
 *
 * Constraints:
 * - Input must be an array of finite numbers
 * - Return false for non-array inputs
 * - Return false for arrays containing non-number values
 * - Return false for arrays containing NaN, Infinity, or -Infinity
 *
 * Approach:
 * - First validate that input is an array
 * - Iterate through each element
 * - Validate each element is a finite number
 * - Count elements that are strictly less than 0
 *
 * Time Complexity: O(n), where n is the length of the array
 * Space Complexity: O(1)
 */

function countNegatives(arr) {
  if (!Array.isArray(arr)) return false;

  let count = 0;

  for (let num of arr) {
    if (typeof num !== "number" || !Number.isFinite(num)) {
      return false;
    }

    if (num < 0) {
      count++;
    }
  }

  return count;
}
