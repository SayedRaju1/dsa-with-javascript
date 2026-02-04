/**
 * Pattern 6: Print a Right-Angled Triangle of Stars
 *
 * Topic: Number
 * Difficulty: Easy
 *
 * Problem:
 * Write a program that prints a right-aligned triangle of stars increasing row by row,
 * with leading spaces for alignment.
 *
 * Example (n = 4):
 *    *
 *   **
 *  ***
 * ****
 *
 * Approach:
 * - Outer loop (rows): loop i from 0 to n - 1; each iteration is a new row
 * - Inner loop 1 (spaces): for each row, add n - i - 1 spaces before the stars to right-align
 * - Inner loop 2 (stars): add i + 1 stars after the spaces
 * - Print the combined spaces and stars for each row
 *
 * Time Complexity: O(n²)
 * Space Complexity: O(n) for the row string
 */

function printRightAlignedTriangleStars(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - (i + 1); j++) {
      row += " ";
    }
    for (let k = 0; k < i + 1; k++) {
      row += "*";
    }
    console.log(row);
  }
}
