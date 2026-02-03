/**
 * Find Second Largest Element
 *
 * Topic: Array
 * Difficulty: Easy
 *
 * Problem:
 * Write a function secondLargest(arr) that returns the second largest distinct
 * number in an array. Duplicate values are ignored.
 *
 * Requirements:
 * - Array must have at least two elements
 * - If fewer than two elements, return "Array should have at least two numbers"
 * - If all elements are equal, return "No second largest found"
 * - Ignore duplicates when determining first and second largest
 *
 * Examples:
 * - [0, 3, 5, 5, 2, 7, 9] → 7 (first largest 9, second distinct 7)
 * - [4, 4, 4, 4] → "No second largest found"
 * - [5] → "Array should have at least two numbers"
 * - [10, 20] → 10
 *
 * Approach:
 * - Check array length; if < 2, return appropriate message
 * - Use two variables: first and second, initialized to -Infinity
 * - Single pass: if num > first, shift first to second and set first = num
 * - Ignore duplicates by checking num !== first before assigning second
 *
 * Time Complexity: O(n), single pass through the array
 * Space Complexity: O(1), constant space
 */

function secondLargest(arr) {
  if (arr.length < 2) {
    return "Array should have at least two numbers";
  }

  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }

  return second === -Infinity ? "No second largest found" : second;
}
