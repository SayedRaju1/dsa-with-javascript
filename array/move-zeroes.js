/**
 * LeetCode #283 - Move Zeroes
 *
 * Topic: Array
 * Difficulty: Easy
 *
 * Problem:
 * Given an integer array nums, move all 0's to the end of it while maintaining
 * the relative order of the non-zero elements. You must do this in-place without
 * making a copy of the array.
 *
 * Requirements:
 * - Modify the array in-place (no extra array).
 * - All zeroes must appear at the end.
 * - Relative order of non-zero elements must be preserved.
 *
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - -2^31 <= nums[i] <= 2^31 - 1
 *
 * Examples:
 * - [0, 1, 0, 3, 12] → [1, 3, 12, 0, 0]
 * - [0]               → [0]
 *
 * Approach (two-pointer, two-pass):
 * - Pointer x: next index where a non-zero element should be placed (initially 0).
 * - First pass: loop i from 0 to end; if nums[i] !== 0, set nums[x] = nums[i], then x++.
 *   This shifts all non-zero elements to the front in order; x ends at first index to fill with 0.
 * - Second pass: from index x to end, set nums[i] = 0.
 *
 * Time Complexity: O(n), two passes through the array
 * Space Complexity: O(1), in-place modification, constant extra space
 */

function moveZeroes(nums) {
  if (!nums || nums.length === 0) return;

  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }

  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
}
