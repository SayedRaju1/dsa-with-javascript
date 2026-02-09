/**
 * LeetCode #27 - Remove Element
 *
 * Topic: Array
 * Difficulty: Easy
 *
 * Problem:
 * Given an integer array nums and an integer val, remove all occurrences of val
 * from nums in-place. The order of the remaining elements may be changed.
 * Return k, the number of elements in nums which are not equal to val.
 *
 * Requirements:
 * - Modify the array in-place (no extra arrays).
 * - First k elements of nums must contain elements not equal to val.
 * - Elements beyond index k can have any value; only the first k elements matter.
 *
 * Examples:
 * - nums = [3, 2, 2, 3], val = 3  → k = 2, nums = [2, 2, _, _]
 * - nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2  → k = 5, nums = [0, 1, 4, 0, 3, _, _, _]
 *
 * Approach (two-pointer):
 * - Pointer x: tracks the next position to place an element not equal to val (initially 0).
 * - Loop i from 0 to nums.length - 1.
 * - If nums[i] !== val, assign nums[x] = nums[i] and increment x.
 * - Return x (count of elements not equal to val).
 *
 * Time Complexity: O(n), single pass through the array
 * Space Complexity: O(1), in-place modification, constant extra space
 */

function removeElement(nums, val) {
  if (!nums || nums.length === 0) return 0;

  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x++;
    }
  }

  return x;
}
