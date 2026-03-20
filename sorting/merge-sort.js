/**
 * Merge Sort
 *
 * Topic: Sorting
 * Difficulty: Easy
 *
 * Problem:
 * Merge Sort is a divide-and-conquer sorting algorithm that divides the input array into two halves,
 * recursively sorts each half, and then merges the sorted halves into one sorted result.
 *
 * Approach:
 * 1. Divide: Split the array into two halves.
 * 2. Conquer: Recursively sort each half using merge sort.
 * 3. Combine: Merge the two sorted halves into one sorted array.
 *
 * Key Concept (Merge Step):
 * Use two pointers to compare elements from both sorted arrays and push the smaller one into a result array.
 *
 * Dry Run (nums = [4, 5, 1, 3, 9]):
 * Step 1: sortArray([4, 5, 1, 3, 9])
 * mid = 2
 * left = sortArray([4, 5])
 * right = sortArray([1, 3, 9])
 *
 * Step 2: sortArray([4, 5]) -> merge([4], [5]) -> [4, 5]
 * Step 3: sortArray([1, 3, 9]) -> merge([1], [3, 9]) -> [1, 3, 9]
 * Step 4: merge([4, 5], [1, 3, 9]) -> [1, 3, 4, 5, 9]
 *
 * Final Sorted Array: [1, 3, 4, 5, 9]
 *
 * Time Complexity: O(n log n) in best, average, and worst cases.
 * Space Complexity: O(n) — extra space is used for merging.
 */

var sortArray = function (nums) {
  if (nums.length <= 1) return nums;
  let mid = Math.floor(nums.length / 2);
  let left = sortArray(nums.slice(0, mid));
  let right = sortArray(nums.slice(mid));
  return merge(left, right);
};

function merge(left, right) {
  let res = [],
    i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i++]);
    } else {
      res.push(right[j++]);
    }
  }
  return [...res, ...left.slice(i), ...right.slice(j)];
}

let nums = [4, 5, 1, 3, 9];
let result = sortArray(nums);
console.log("Sorted array", result);
