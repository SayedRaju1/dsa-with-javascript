/**
 * Insertion Sort
 *
 * Topic: Sorting
 * Difficulty: Easy
 *
 * Problem:
 * Insertion Sort is a simple and intuitive sorting algorithm that builds the final sorted array one element at a time.
 * It works by taking each element from the input and inserting it into its correct position in the already sorted part of the array.
 * Starting from the second element, it compares the current element with the previous ones, shifting larger elements
 * one position ahead to make space for the current element. This process continues until all elements are sorted.
 *
 * Approach:
 * 1. Start from the second element (index 1) since the first element is trivially "sorted".
 * 2. Store the current element (curr) and compare it with all previous elements.
 * 3. Shift the previous elements one position forward if they are greater than the current element.
 * 4. Insert the current element (curr) at its correct sorted position.
 * 5. Repeat until the whole array is sorted.
 *
 * Dry Run (arr = [4, 5, 1, 3, 9]):
 * i = 1 -> curr = 5, prev = 0
 * arr[0] = 4 ≤ 5 -> no shifting
 * Insert curr -> [4, 5, 1, 3, 9]
 *
 * i = 2 -> curr = 1, prev = 1
 * arr[1] = 5 > 1 -> shift -> [4, 5, 5, 3, 9]
 * arr[0] = 4 > 1 -> shift -> [4, 4, 5, 3, 9]
 * prev = -1 -> stop
 * Insert curr -> [1, 4, 5, 3, 9]
 *
 * i = 3 -> curr = 3, prev = 2
 * arr[2] = 5 > 3 -> shift -> [1, 4, 5, 5, 9]
 * arr[1] = 4 > 3 -> shift -> [1, 4, 4, 5, 9]
 * arr[0] = 1 ≤ 3 -> stop
 * Insert curr -> [1, 3, 4, 5, 9]
 *
 * i = 4 -> curr = 9, prev = 3
 * arr[3] = 5 ≤ 9 -> no shifting
 * Insert curr -> [1, 3, 4, 5, 9]
 *
 * Final Sorted Array: [1, 3, 4, 5, 9]
 *
 * Time Complexity: O(n) best case (already sorted).
 *                  O(n²) average case.
 *                  O(n²) worst case.
 * Space Complexity: O(1) — in-place sorting, no extra space.
 */

let arr = [4, 5, 1, 3, 9];
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let prev = i - 1;
    while (arr[prev] > curr && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr;
  }
  return arr;
}

let result = insertionSort(arr);
console.log("Sorted array", result);
