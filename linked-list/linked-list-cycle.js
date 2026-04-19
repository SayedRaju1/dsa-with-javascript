/**
 * LeetCode #141 - Linked List Cycle
 *
 * Topic: Linked List
 * Difficulty: Easy
 *
 * Problem:
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * Return true if there is a cycle; otherwise, return false.
 *
 * Examples:
 * - Input: head = [3, 2, 0, -4], pos = 1
 *   Output: true
 * - Input: head = [1, 2], pos = 0
 *   Output: true
 * - Input: head = [1], pos = -1
 *   Output: false
 *
 * Constraints:
 * - The number of nodes is in the range [0, 10^4].
 * - -10^5 <= Node.val <= 10^5
 * - pos is -1 or a valid index in the linked list.
 *
 * Definition for singly-linked list:
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 *
 * Approach (hash table using Set):
 * - Use a Set to keep track of visited node references.
 * - Traverse the list from head to null.
 * - If current node is already in the Set, a cycle exists.
 * - Otherwise add the node to the Set and continue.
 * - If traversal reaches null, no cycle exists.
 *
 * Time Complexity: O(n), where n is the number of nodes
 * Space Complexity: O(n), in the worst case all nodes are stored in the Set
 *
 * Alternate — Floyd's cycle detection (tortoise and hare):
 * - Initialize two pointers: slow (one step) and fast (two steps).
 * - If a cycle exists, fast will eventually meet slow inside the loop.
 * - If fast or fast.next reaches null, there is no cycle.
 * - See hasCycleFloyd below (same logic as the reference solution; rename to hasCycle for LeetCode).
 *
 * Time (alternate): O(n)
 * Space (alternate): O(1)
 */
var hasCycle = function (head) {
  let seenNodes = new Set();
  let curr = head;

  while (curr !== null) {
    if (seenNodes.has(curr)) {
      return true;
    }
    seenNodes.add(curr);
    curr = curr.next;
  }

  return false;
};

/**
 * Alternate solution: Floyd's cycle detection (tortoise and hare).
 * Submit as hasCycle on LeetCode by renaming this function.
 */
var hasCycleFloyd = function (head) {
  if (!head) return false;
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
    if (!fast || !fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
