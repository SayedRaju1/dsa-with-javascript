/**
 * LeetCode #88 - Merge Sorted Array
 *
 * Topic: Array
 * Difficulty: Easy
 *
 * Problem:
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
 * and two integers m and n, representing the number of elements in nums1 and nums2.
 * Merge nums2 into nums1 in-place so that nums1 contains the merged result in
 * non-decreasing order. Do not return anything; modify nums1 in-place.
 *
 * Requirements:
 * - nums1 has length m + n: first m elements are valid, last n are placeholders (e.g. 0).
 * - nums2 has length n.
 * - Store the merged result inside nums1 (first m + n elements sorted).
 *
 * Constraints:
 * - nums1.length == m + n, nums2.length == n
 * - 0 <= m, n <= 200, 1 <= m + n <= 200
 * - -10^9 <= nums1[i], nums2[j] <= 10^9
 *
 * Examples:
 * - nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 → nums1 = [1,2,2,3,5,6]
 * - nums1 = [1], m = 1, nums2 = [], n = 0 → nums1 = [1]
 * - nums1 = [0], m = 0, nums2 = [1], n = 1 → nums1 = [1]
 *
 * Approach (optimal — two-pointer from the end):
 * - Fill nums1 from the end (index m + n - 1) to avoid overwriting unprocessed nums1 values.
 * - p1 = m - 1 (last valid in nums1), p2 = n - 1 (last in nums2).
 * - For each position i from m+n-1 down to 0: place the larger of nums1[p1] and nums2[p2], then decrement that pointer.
 * - If p2 < 0, we're done (nums1 prefix already in place). If p1 < 0, copy remaining nums2.
 *
 * Alternatives:
 * - Brute force: copy nums2 into nums1 from index m, then sort — O((m+n) log(m+n)), O(1) extra.
 * - Two-pointer with copy: nums1Copy = nums1.slice(0,m), merge into nums1 — O(m+n), O(m) space.
 *
 * Time Complexity: O(m + n), single pass
 * Space Complexity: O(1), in-place, constant extra space
 */

function merge(nums1, m, nums2, n) {
  let p1 = m - 1; // last valid element in nums1
  let p2 = n - 1; // last element in nums2

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1--];
    } else {
      nums1[i] = nums2[p2--];
    }
  }
}
