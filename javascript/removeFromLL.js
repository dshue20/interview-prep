// Given the head of a linked list, remove the nth node from the end of the list and return its head.

var removeNthFromEnd = function (head, n) {
  let slow = head;
  let fast = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  if (!fast) return head.next;
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return head;
};
