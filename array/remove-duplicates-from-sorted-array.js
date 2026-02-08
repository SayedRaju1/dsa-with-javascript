/**
 * LeetCode #26 - Remove Duplicates from Sorted Array
 *
 * Topic: Array
 * Difficulty: Easy
 *
 * Problem:
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates
 * in-place such that each unique element appears only once. The relative order of
 * the elements must be kept the same. Return k, the number of unique elements.
 *
 * Requirements:
 * - Modify the array in-place (no extra arrays).
 * - First k elements of nums must contain the unique elements in original order.
 * - Elements beyond index k can have any value; only the first k elements matter.
 *
 * Constraints:
 * - 1 <= nums.length <= 3 * 10^4
 * - -100 <= nums[i] <= 100
 * - nums is sorted in non-decreasing order (nums[i] <= nums[i+1])
 *
 * Examples:
 * - [1, 1, 2]           → k = 2, nums = [1, 2, _]
 * - [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] → k = 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]
 *
 * Approach (two-pointer):
 * - Pointer x: tracks the index of the last unique element placed (initially 0).
 * - Loop i from 0 to nums.length - 1.
 * - If nums[i] > nums[x], we have a new unique value: increment x and set nums[x] = nums[i].
 * - Return x + 1 (count of unique elements).
 *
 * Time Complexity: O(n), single pass through the array
 * Space Complexity: O(1), in-place modification, constant extra space
 */

function removeDuplicates(nums) {
  if (!nums || nums.length === 0) return 0;

  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x++;
      nums[x] = nums[i];
    }
  }

  return x + 1;
}
