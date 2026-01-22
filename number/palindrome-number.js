/**
 * LeetCode #9 - Palindrome Number
 *
 * Topic: Number
 * Difficulty: Easy
 *
 * Approach:
 * - Negative numbers and numbers ending in 0 (except 0 itself) cannot be palindromes
 * - Reverse only half of the number to avoid overflow
 * - Compare the original half with the reversed half
 * - Handle both even and odd length numbers
 *
 * Time Complexity: O(log10(n)), where n is the input number
 * Space Complexity: O(1)
 */

function isPalindrome(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let reversedHalf = 0;

  while (x > reversedHalf) {
    reversedHalf = reversedHalf * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}
