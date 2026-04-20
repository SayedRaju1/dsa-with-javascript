/**
 * LeetCode #234 - Palindrome Linked List
 *
 * Topic: Linked List
 * Difficulty: Easy
 *
 * Problem:
 * Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
 *
 * Examples:
 * - Input: head = [1, 2, 2, 1]
 *   Output: true
 * - Input: head = [1, 2]
 *   Output: false
 *
 * Constraints:
 * - The number of nodes in the list is in the range [1, 10^5].
 * - 0 <= Node.val <= 9
 *
 * Definition for singly-linked list:
 * function ListNode(val, next) {
 *   this.val = (val === undefined ? 0 : val);
 *   this.next = (next === undefined ? null : next);
 * }
 *
 * Approach 1 (array):
 * - Traverse the linked list and store each value in an array.
 * - Use two pointers from both ends of the array and compare values.
 * - If any pair does not match, return false.
 * - If all pairs match, return true.
 *
 * Time Complexity: O(n), where n is the number of nodes
 * Space Complexity: O(n), for the array
 */
var isPalindrome = function (head) {
  let arr = [];
  let curr = head;

  while (curr !== null) {
    arr.push(curr.val);
    curr = curr.next;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left++] !== arr[right--]) return false;
  }

  return true;
};

/**
 * Approach 2 (slow/fast + reverse second half):
 * - Use slow and fast pointers to reach the middle.
 * - Reverse the second half of the list in-place.
 * - Compare first half and reversed second half node by node.
 * - If any value differs, return false; otherwise return true.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var isPalindromeOptimized = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  let first = head;
  let second = prev;

  while (second) {
    if (first.val !== second.val) return false;
    first = first.next;
    second = second.next;
  }

  return true;
};
