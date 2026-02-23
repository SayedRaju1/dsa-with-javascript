/**
 * LeetCode #268 - Missing Number
 *
 * Topic: Array
 * Difficulty: Easy
 *
 * Problem:
 * Given an array nums containing n distinct numbers in the range [0, n], return
 * the only number in the range [0, n] that is missing from the array.
 *
 * Requirements:
 * - n == nums.length
 * - All numbers in nums are unique
 * - Find the single missing number in the range 0 to n (inclusive)
 *
 * Constraints:
 * - 1 <= n <= 10^4
 * - 0 <= nums[i] <= n
 * - All the numbers in nums are unique
 *
 * Examples:
 * - [3, 0, 1]           → 2  (range [0,3], 2 is missing)
 * - [0, 1]               → 2  (range [0,2], 2 is missing)
 * - [9, 6, 4, 2, 3, 5, 7, 0, 1] → 8  (range [0,9], 8 is missing)
 *
 * Approach (optimal – sum formula):
 * - Expected sum of 0 to n is totalSum = n * (n + 1) / 2.
 * - Sum all elements in nums (sumOfArray).
 * - Missing number = totalSum - sumOfArray.
 *
 * Alternative (brute-force): Sort nums, then loop; if nums[0] !== 0 return 0;
 * if nums[i] !== nums[i-1] + 1 return nums[i-1] + 1; else return n. O(n log n).
 *
 * Time Complexity: O(n), single pass to compute array sum
 * Space Complexity: O(1), constant extra space
 */

function missingNumber(nums) {
  const n = nums.length;
  const totalSum = (n * (n + 1)) / 2;
  let sumOfArray = 0;

  for (const num of nums) {
    sumOfArray += num;
  }

  return totalSum - sumOfArray;
}
