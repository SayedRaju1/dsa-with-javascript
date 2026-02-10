/**
 * LeetCode #344 - Reverse String
 *
 * Topic: Array
 * Difficulty: Easy
 *
 * Problem:
 * Write a function that reverses a string. The input string is given as an array
 * of characters s. You must do this by modifying the input array in-place with
 * O(1) extra memory.
 *
 * Requirements:
 * - Modify the array of characters in-place (no extra array).
 * - Use O(1) extra memory.
 *
 * Examples:
 * - ["h","e","l","l","o"]     → ["o","l","l","e","h"]
 * - ["H","a","n","n","a","h"] → ["h","a","n","n","a","H"]
 *
 * Approach (two-pointer):
 * - Iterate from i = 0 to Math.floor(len / 2) - 1 (half the array).
 * - Swap s[i] with s[len - i - 1] using a temp variable.
 * - After the loop, the array is reversed in place.
 *
 * Time Complexity: O(n), where n is the length of the array
 * Space Complexity: O(1), in-place modification
 */

function reverseString(s) {
  if (!s || s.length === 0) return;

  const len = s.length;
  const halfLen = Math.floor(len / 2);

  for (let i = 0; i < halfLen; i++) {
    const temp = s[i];
    s[i] = s[len - i - 1];
    s[len - i - 1] = temp;
  }
}
