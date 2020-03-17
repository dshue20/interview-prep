// Given a linked list, swap every two adjacent nodes and return its head.
// You may not modify the values in the list's nodes, only nodes itself may be changed. 

// Example:
// Given 1->2->3->4, you should return the list as 2->1->4->3.

class ListNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

var swapPairs = function(head) {
    if (!head || !head.next) return head;
    let arr = [];
    while (head){
        if (head.next) arr.push(head.next.val);
        arr.push(head.val);
        head = head.next ? head.next.next : head.next;
    };
    console.log(arr);
    let toReturn = new ListNode(null);
    let copy = new ListNode(null);
    toReturn.next = copy;
    arr.forEach((ele, idx) => {
        copy.val = ele;
        if (idx != arr.length-1) copy.next = new ListNode(null);
        copy = copy.next;
    });
    return toReturn.next;
};

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
a.next = b;
b.next = c;
c.next = d;

console.log(swapPairs(a));