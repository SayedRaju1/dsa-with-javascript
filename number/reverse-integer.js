/**
 * LeetCode #7 - Reverse Integer (Reverse Digits of an Integer)
 *
 * Topic: Number
 * Difficulty: Medium
 *
 * Problem:
 * Write a function reverse(x) that takes a 32-bit signed integer and returns its digits reversed.
 * If the reversed value overflows the 32-bit signed integer range, return 0.
 *
 * Requirements:
 * - Reverse the digits of a 32-bit signed integer.
 * - Return 0 if the result overflows.
 *
 * Constraints:
 * - Time Complexity: O(d), where d is the number of digits.
 * - Space Complexity: O(1) — constant space.
 *
 * Examples:
 * - reverse(123)           → 321
 * - reverse(-123)          → -321
 * - reverse(1534236469)    → 0 (overflow)
 *
 * Corner cases to consider:
 * - Negative integers: reverse absolute value, then restore sign (e.g. -123 → -321).
 * - Integer overflow: reversed value must stay in [-2³¹, 2³¹ - 1]; return 0 otherwise.
 * - Single-digit numbers: e.g. reverse(5) → 5.
 * - Numbers ending in zero: e.g. 120 → 21 (leading zeros dropped).
 *
 * Approach:
 * - Preserve the original: save x in xCopy to remember the sign.
 * - Work with absolute value: use Math.abs(x) to simplify reversal.
 * - Reverse digits: initialize rev = 0; while x > 0: last = x % 10, rev = rev * 10 + last, x = Math.floor(x / 10).
 * - Check for overflow: return 0 if reversed value is outside 32-bit signed range before applying sign.
 * - Restore sign: return -rev if xCopy < 0, else rev.
 *
 * Time Complexity: O(d), where d is the number of digits
 * Space Complexity: O(1)
 */

const INT_MAX = 2 ** 31 - 1;   // 2,147,483,647
const INT_MIN_BOUND = 2 ** 31; // for negative: -rev must be >= -2³¹, so rev <= 2³¹

function reverse(x) {
  const xCopy = x;
  x = Math.abs(x);

  let rev = 0;

  while (x > 0) {
    const last = x % 10;
    rev = rev * 10 + last;
    x = Math.floor(x / 10);
  }

  // Overflow: before applying sign, ensure result fits in 32-bit signed range
  if (xCopy < 0) {
    if (rev > INT_MIN_BOUND) return 0;
    return -rev;
  }

  if (rev > INT_MAX) return 0;
  return rev;
}
