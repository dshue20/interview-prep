// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(node){
        const newNode = new Node(node.value);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
        if (!this.bottom) this.bottom = newNode;
        return this.length;
    }

    pop(){
        if (!this.length) return null;
        const temp = this.top;
        this.top = this.top.next;
        this.length--;
        if (!this.length) this.bottom = null;
        return temp;
    }

    size(){
        return this.length;
    }
}

class StackQueue {
    constructor(){
        this.inStack = new Stack();
        this.outStack = new Stack();
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(val){
        const node = new Node(val);
        if (!this.front) this.front = node;
        if (this.back) this.back.next = node;
        this.back = node;
        this.inStack.push(node);
        this.length++;
        return this.length;
    }

    dequeue(){
        if (!this.length) return null;
        this.front = this.front.next;
        while (this.inStack.length){
            this.outStack.push(this.inStack.pop());
        };
        this.length--;
        console.log(this.length);
        if (!this.length) this.back = null;
        return this.outStack.pop();
    }

    size(){
        return this.length;
    }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
