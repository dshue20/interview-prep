var twoSum = function(nums, target) {
    const length = nums.length;
    for (let i=0; i < length; i++){
        let firstNum = nums.shift();
        console.log(firstNum);
        console.log(nums);
        if (nums.includes(target - firstNum)) {
            console.log('hi');
            return [i, nums.indexOf(target - firstNum) + i + 1]
        }
        console.log('i: ', i)
    }
    return 'derek';
};

// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.


//  * Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    let node = new ListNode(null);
    let currentNode = node;
    let carry = 0;
    let p = l1;
    let q = l2;
    while (p || q){
        let x = p.val ? p.val : 0;
        let y = q.val ? q.val : 0;
        let sum = x + y + carry;
        carry = Math.floor(sum / 10);
        let nextNode = new ListNode(sum % 10);
        currentNode.next = nextNode;
        currentNode = nextNode;
        p = p.next;
        q = q.next;
    }
    if (carry === 1) currentNode.next = new ListNode(1);
    return node.next;
};

// const l1 = new ListNode(2);
// l1.next = new ListNode(4);
// l1.next.next = new ListNode(3);

// const l2 = new ListNode(5);
// l2.next = new ListNode(6);
// l2.next.next = new ListNode(4);

// console.log(addTwoNumbers(l1, l2));

const mergeSort = arr => {
    if (arr.length <= 1) return arr;
    const midIdx = Math.floor(arr.length/2);
    const left = arr.slice(0,midIdx);
    const right = arr.slice(midIdx);
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight);
}

const merge = (left, right) => {
    let merged = [];
    while (left.length || right.length){
        if (!left.length){
            merged = merged.concat(right);
            break;
        } else if (!right.length){
            merged = merged.concat(left);
            break;
        } else {
            merged.push(left[0] < right[0] ? left.shift() : right.shift())
        }
    };
    return merged;
}

// console.log(mergeSort([5,2,7,12,1,3]))

const quickSort = arr => {
    if (arr.length <=1 ) return arr;
    let sorted = [];
    let left = [];
    let right = [];
    const pivot = arr[0];
    for (i=1; i<arr.length; i++){
        if (arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    };
    return [...quickSort(left), pivot, quickSort(right)]
}

console.log(mergeSort([5,2,7,5,-1,12,1,3]))