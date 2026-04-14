/**
 * LeetCode #876 - Middle of the Linked List
 *
 * Topic: Linked List
 * Difficulty: Easy
 *
 * Problem:
 * Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
 *
 * Definition for singly-linked list:
 * function ListNode(val, next) {
 *   this.val = (val === undefined ? 0 : val);
 *   this.next = (next === undefined ? null : next);
 * }
 *
 * Approach (slow and fast pointers):
 * - Initialize both pointers at the head.
 * - Move slow by 1 step and fast by 2 steps.
 * - When fast reaches the end, slow points to the middle.
 *
 * Examples:
 * - Input: [1, 2, 3, 4, 5]
 *   Output: [3, 4, 5]
 * - Input: [1, 2, 3, 4, 5, 6]
 *   Output: [4, 5, 6]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
