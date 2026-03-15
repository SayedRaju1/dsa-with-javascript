/**
 * Bubble Sort
 *
 * Topic: Sorting
 * Difficulty: Easy
 *
 * Problem:
 * Bubble Sort is a simple sorting algorithm that repeatedly steps through a list. It compares
 * adjacent elements and swaps them if they are in the wrong order. This process continues
 * until the entire array is sorted. After each pass, the largest unsorted element "bubbles up"
 * to its correct position at the end of the array. Smaller elements slowly "bubble" to the top.
 *
 * Approach:
 * 1. Iterate through the array multiple times.
 * 2. In each pass, compare adjacent elements.
 * 3. If the current element is greater than the next one, swap them.
 * 4. After each pass, the largest unsorted element bubbles up to its correct position at the end.
 * 5. Optimization: Use a boolean flag (isSwapped) to track if any swapping happened during a full pass.
 * 6. Early exit: If no swaps occurred in a complete pass, the array is already sorted — break out.
 * 7. Repeat for n-1 passes (or until no swaps are needed).
 *
 * Dry Run (arr = [4, 5, 1, 3, 9]):
 * - Pass 1 (i = 0): j=0: 4<5 no swap [4,5,1,3,9]; j=1: 5>1 swap [4,1,5,3,9]; j=2: 5>3 swap [4,1,3,5,9];
 *   j=3: 5<9 no swap. Result: 9 at correct position.
 * - Pass 2 (i = 1): j=0: 4>1 swap [1,4,3,5,9]; j=1: 4>3 swap [1,3,4,5,9]; j=2: 4<5 no swap.
 *   Result: 5 at correct position.
 * - Pass 3 (i = 2): j=0: 1<3 no swap; j=1: 3<4 no swap. No swaps → early exit.
 * - Output: [1, 3, 4, 5, 9]
 *
 * Time Complexity: O(n) best case (already sorted, early exit with isSwapped).
 *                  O(n²) worst case (array in reverse order).
 * Space Complexity: O(1) — in-place sorting, no extra space.
 */

let arr = [4, 5, 1, 3, 9];

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
}

let result = bubbleSort(arr);
console.log("Sorted array", result);
