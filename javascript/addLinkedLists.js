// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

var addTwoNumbers = function (list1, list2, remainder = 0) {
  if (!list1 && !list2 && !remainder) {
    return null;
  }

  let [sum, newRemainder] = getSumAndRemainder(list1, list2, remainder);
  let head = new ListNode(sum);

  let next1 = list1 ? list1.next : list1;
  let next2 = list2 ? list2.next : list2;
  head.next = addTwoNumbers(next1, next2, newRemainder);
  return head;
};

const getSumAndRemainder = (node1, node2, remainder) => {
  let sum = 0;
  let newRemainder = 0;
  if (!node1 && !node2) {
    return [0, 1];
  } else if (!node1) {
    sum = node2.val;
  } else if (!node2) {
    sum = node1.val;
  } else {
    sum = (node1.val + node2.val + remainder) % 10;
    newRemainder = Math.floor((node1.val + node2.val) / 10);
  }
  return [sum, newRemainder];
};
