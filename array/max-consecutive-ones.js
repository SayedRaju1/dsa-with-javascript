/**
 * LeetCode #485 - Max Consecutive Ones
 *
 * Topic: Array
 * Difficulty: Easy
 *
 * Problem:
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 *
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - nums[i] is either 0 or 1
 *
 * Examples:
 * - [1, 1, 0, 1, 1, 1]  → 3 (first two or last three digits are consecutive 1s; max is 3)
 * - [1, 0, 1, 1, 0, 1]  → 2
 *
 * Approach (single pass):
 * - currentCount: counts the current streak of 1s.
 * - maxCount: maximum streak seen so far.
 * - Traverse the array: if nums[i] === 1, increment currentCount; if nums[i] === 0,
 *   update maxCount = max(maxCount, currentCount) and reset currentCount to 0.
 * - After the loop, return max(maxCount, currentCount) to handle array ending with 1s.
 *
 * Time Complexity: O(n), one pass through the array
 * Space Complexity: O(1), only a few variables used
 */

function findMaxConsecutiveOnes(nums) {
  let currentCount = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentCount++;
    } else {
      maxCount = Math.max(maxCount, currentCount);
      currentCount = 0;
    }
  }

  return Math.max(maxCount, currentCount);
}
