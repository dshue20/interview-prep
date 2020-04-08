// Given a singly linked list L: L0→L1→…→Ln-1→Ln,
// reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

// You may not modify the values in the list's nodes, only nodes itself may be changed.

// Example 1:

// Given 1->2->3->4, reorder it to 1->4->2->3.
// Example 2:

// Given 1->2->3->4->5, reorder it to 1->5->2->4->3.

class ListNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

var reorderList = function(head) {
    console.log(head);
    const reversed = reverse(head);
    const result = new ListNode();
    const curr = new ListNode();
    console.log(reversed);
    const listLength = getLength(head);
    console.log('hi');
    result.next = curr;
    console.log(reversed, listLength);
    for (let i=0; i < Math.floor(listLength/2); i++){
        curr.next = head.val;
        curr.next.next = reversed.val;
        head = head.next;
        reversed = reversed.next;
        curr = curr.next.next;
    };
    if(listLength % 2 === 1) curr.next = head.val;
    return result.next.next;
};

var reverse = function(head) {
    if (!head.next) return head;
    const reversed = reverse(head.next);
    head.next.next = head;
    return reversed;
};

var getLength = function(head) {
    let length = 0;
    if (head.val) length++;
    while(head.next){
        length++;
        head = head.next;
    }
    return length;
};

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
a.next = b;
b.next = c;
c.next = d;

console.log(reorderList(a));