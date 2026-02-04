/**
 * Pattern 5: Print a Reverse Right-Angled Triangle of Increasing Numbers
 *
 * Topic: Number
 * Difficulty: Easy
 *
 * Problem:
 * Write a program that prints a reverse right-angled triangle where each row
 * starts from 1 and the number of elements decreases with each row.
 *
 * Example (n = 4):
 * 1 2 3 4
 * 1 2 3
 * 1 2
 * 1
 *
 * Approach:
 * - Outer loop (rows): loop i from 0 to n - 1; each iteration is a new row
 * - Inner loop (numbers): for each row, loop j from 0 to n - i - 1; append j + 1 to row string
 * - Print the accumulated row string after each inner loop
 *
 * Time Complexity: O(n²)
 * Space Complexity: O(n) for the temporary row string
 */

function printReverseRightAngledTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += (j + 1);
    }
    console.log(row);
  }
}

// Example usage
// printReverseRightAngledTriangle(4);
// 1234
// 123
// 12
// 1
