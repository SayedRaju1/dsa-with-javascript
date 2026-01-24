/**
 * LeetCode #7 - Reverse Integer
 *
 * Topic: Number
 * Difficulty: Medium
 *
 * Approach:
 * - Extract digits from right to left using modulo
 * - Build the reversed number by multiplying result by 10 and adding the digit
 * - Check for overflow BEFORE updating result to stay within 32-bit integer range
 * - Use truncation toward zero for division to handle negative numbers correctly
 *
 * Time Complexity: O(log10(n)), where n is the input number (number of digits)
 * Space Complexity: O(1)
 */

function reverse(x) {
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  let result = 0;

  while (x !== 0) {
    const digit = x % 10;
    x = (x / 10) | 0; // truncate toward zero

    // Overflow check BEFORE updating result
    if (result > INT_MAX / 10 || (result === INT_MAX / 10 && digit > 7)) {
      return 0;
    }

    if (result < INT_MIN / 10 || (result === INT_MIN / 10 && digit < -8)) {
      return 0;
    }

    result = result * 10 + digit;
  }

  return result;
}
