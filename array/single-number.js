/**
 * LeetCode #136 - Single Number
 *
 * Topic: Array (Bit Manipulation)
 * Difficulty: Easy
 *
 * Problem:
 * Given a non-empty array of integers nums, every element appears twice except
 * for one. Find that single element. Solution must run in linear time O(n) and
 * use only constant extra space O(1).
 *
 * Requirements:
 * - Non-empty array; exactly one element appears once, all others appear twice
 * - Linear runtime complexity O(n)
 * - Constant extra space O(1)
 *
 * Constraints:
 * - 1 <= nums.length <= 3 * 10^4
 * - -3 * 10^4 <= nums[i] <= 3 * 10^4
 *
 * Examples:
 * - [2, 2, 1]           → 1
 * - [4, 1, 2, 1, 2]     → 4
 * - [1]                  → 1
 *
 * Approach (optimal – XOR):
 * - XOR properties: a ^ a = 0, a ^ 0 = a. So pairs cancel out; the unique number remains.
 * - Initialize xor = 0; loop through nums and xor = xor ^ nums[i]; return xor.
 *
 * Alternative (hash map): Count occurrences in a map, then find key with count 1.
 * O(n) time but O(n) space — does not meet the O(1) extra space requirement.
 *
 * Time Complexity: O(n), single pass through the array
 * Space Complexity: O(1), constant extra space
 */

function singleNumber(nums) {
  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }

  return xor;
}
