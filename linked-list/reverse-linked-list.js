/**
 * LeetCode #206 - Reverse Linked List
 *
 * Topic: Linked List
 * Difficulty: Easy
 *
 * Problem:
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 *
 * Examples:
 * - Input: head = [1, 2, 3, 4, 5]
 *   Output: [5, 4, 3, 2, 1]
 * - Input: head = [1, 2]
 *   Output: [2, 1]
 * - Input: head = []
 *   Output: []
 *
 * Constraints:
 * - The number of nodes in the list is in the range [0, 5000].
 * - -5000 <= Node.val <= 5000
 *
 * Definition for singly-linked list:
 * function ListNode(val, next) {
 *   this.val = (val === undefined ? 0 : val);
 *   this.next = (next === undefined ? null : next);
 * }
 *
 * Approach (iterative, three pointers):
 * - Use three pointers: prev, curr, and temp.
 * - Save next node in temp.
 * - Reverse current link by pointing curr.next to prev.
 * - Move prev and curr one step forward.
 * - Return prev as the new head.
 *
 * Time Complexity: O(n), visit each node once
 * Space Complexity: O(1), in-place reversal
 */
var reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
};
