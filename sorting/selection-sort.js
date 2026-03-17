/**
 * Selection Sort
 *
 * Topic: Sorting
 * Difficulty: Easy
 *
 * Problem:
 * Selection Sort is a simple comparison-based sorting algorithm.
 * It divides the array into two parts: a sorted subarray and an unsorted subarray.
 * Initially, the sorted part is empty, and the unsorted part is the entire array.
 * In each iteration, it finds the minimum element from the unsorted part and moves it to the end of the sorted part.
 *
 * Example:
 * Input:  [4, 5, 1, 3, 9]
 * Output: [1, 3, 4, 5, 9]
 *
 * Approach:
 * 1. Iterate over the array from index 0 to n-2.
 * 2. For each index i, assume the element at i is the minimum in the unsorted part.
 * 3. Run an inner loop from j = i + 1 to n - 1 to find the actual minimum element.
 * 4. If a smaller element is found, update the min index.
 * 5. After the inner loop, swap the element at i with the element at min (if they’re not the same).
 * 6. Repeat until the array is sorted.
 *
 * Dry Run (arr = [4, 5, 1, 3, 9]):
 * i = 0 -> min_idx = 0
 *   j = 1 -> arr[1] = 5 > arr[0] = 4 -> no change
 *   j = 2 -> arr[2] = 1 < arr[0] = 4 -> min_idx = 2
 *   j = 3 -> arr[3] = 3 > arr[2] = 1 -> no change
 *   j = 4 -> arr[4] = 9 > arr[2] = 1 -> no change
 *   swap arr[0] ↔ arr[2] -> [1, 5, 4, 3, 9]
 *
 * i = 1 -> min_idx = 1
 *   j = 2 -> arr[2] = 4 < arr[1] = 5 -> min_idx = 2
 *   j = 3 -> arr[3] = 3 < arr[2] = 4 -> min_idx = 3
 *   j = 4 -> arr[4] = 9 > arr[3] = 3 -> no change
 *   swap arr[1] ↔ arr[3] -> [1, 3, 4, 5, 9]
 *
 * i = 2 -> min_idx = 2
 *   j = 3 -> arr[3] = 5 > arr[2] = 4 -> no change
 *   j = 4 -> arr[4] = 9 > arr[2] = 4 -> no change
 *   no swap -> [1, 3, 4, 5, 9]
 *
 * i = 3 -> min_idx = 3
 *   j = 4 -> arr[4] = 9 > arr[3] = 5 -> no change
 *   no swap -> [1, 3, 4, 5, 9]
 *
 * Final Sorted Array: [1, 3, 4, 5, 9]
 *
 * Time Complexity: O(n²) in all cases (best, average and worst).
 * Space Complexity: O(1) — in-place sorting, no extra space.
 */

let arr = [4, 5, 1, 3, 9];

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

let result = selectionSort(arr);
console.log("Sorted array", result);

