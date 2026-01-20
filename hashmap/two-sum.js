/**
 * LeetCode #1 - Two Sum
 *
 * Topic: Hash Map
 * Difficulty: Easy
 *
 * Approach:
 * - Use a Map to store numbers and their indices
 * - For each number, check if (target - number) exists
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];

    if (map.has(needed)) {
      return [map.get(needed), i];
    }

    map.set(nums[i], i);
  }
}
