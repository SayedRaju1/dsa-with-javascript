/**
 * Count Digits
 *
 * Topic: Number
 * Difficulty: Easy
 *
 * Problem:
 * Write a function countDigits(n) that takes an integer n and returns how many digits it contains.
 *
 * Requirements:
 * - Handle both positive and negative integers.
 * - If n is 0, return 1 (0 is considered a single-digit number).
 *
 * Corner cases to consider:
 * - Zero: n === 0 → return 1 (single digit).
 * - Negative numbers: count digits of absolute value (e.g. -1035 → 4).
 * - Single digit: 1–9 or -1 to -9 → return 1.
 * - Large numbers: ensure logic works within JavaScript safe integer range (Number.MAX_SAFE_INTEGER).
 * - Non-integer input: problem assumes integer; consider validating with Number.isInteger(n) if needed.
 *
 * Approach:
 * - Handle zero: if n === 0, return 1.
 * - Convert to positive: use Math.abs(n) to ignore sign.
 * - Initialize count = 0, then while n > 0: n = Math.floor(n / 10), count++.
 * - Return count.
 *
 * Time Complexity: O(log10(n)), where n is the absolute value of the input (number of digits).
 * Space Complexity: O(1)
 */

function countDigits(n) {
  if (n === 0) return 1;

  n = Math.abs(n);
  let count = 0;

  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }

  return count;
}
