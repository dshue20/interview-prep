// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.

class ListNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

var removeNthFromEnd = function(head, n) {
    if (n === 1 && !head.next) return null;
    let current = head;
    let length = 0;
    while (current){
        length++;
        current = current.next;
    };
    if (n === length){
        return head.next;
    };
    current = head;
    let count = 0;
    for (let i=0; i < length; i++){
        if (length - i - 1 === n){
            current.next = current.next.next;
            break;
        } else {
            current = current.next;
        }
    }
    return head;
};

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(removeNthFromEnd(a, 2));