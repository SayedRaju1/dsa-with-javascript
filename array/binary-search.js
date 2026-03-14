/**
 * Binary Search
 *
 * Topic: Array
 * Difficulty: Easy
 *
 * Problem:
 * Binary Search is an efficient algorithm used to find the position of a target value within a
 * sorted array. Unlike linear search, it repeatedly divides the search interval in half,
 * significantly reducing the number of comparisons.
 *
 * Approach:
 * 1. Set left = 0 and right = nums.length - 1.
 * 2. While right >= left:
 *    - Calculate middle = Math.floor((left + right) / 2).
 *    - If nums[middle] === target, return middle.
 *    - If target < nums[middle], discard the right half: right = middle - 1.
 *    - Else discard the left half: left = middle + 1.
 * 3. If the target is not found, return -1.
 *
 * Dry Run (nums = [-1, 0, 3, 5, 9, 12], target = 9):
 * - Initial: left = 0, right = 5
 * - Iteration 1: middle = Math.floor((0 + 5) / 2) = 2, nums[2] = 3. target (9) > nums[middle] (3)
 *   → left = middle + 1 = 3. State: left = 3, right = 5
 * - Iteration 2: middle = Math.floor((3 + 5) / 2) = 4, nums[4] = 9. target (9) === nums[middle] (9)
 *   → return 4. Loop ends (target found).
 * - Output: 4 (Target found at index 4)
 *
 * Examples:
 * - nums = [1, 3, 5, 7, 9], target = 7  → 3
 * - nums = [-1, 0, 3, 5, 9, 12], target = 9  → 4
 * - nums = [-1, 0, 3, 5, 9, 12], target = 2  → -1 (not found)
 *
 * Time Complexity: O(1) (best case) when the target is found at the middle initially.
 *                  O(log n) (worst case) — the array is halved every iteration.
 * Space Complexity: O(1) Constant Space — no additional data structures.
 */

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (right >= left) {
    let middle = Math.floor((left + right) / 2);
    if (target === nums[middle]) {
      return middle;
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};
