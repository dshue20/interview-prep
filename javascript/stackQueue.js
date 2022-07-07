// Implement a StackQueue class which implements a queue using two stacks.

class StackQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push(val) {
    this.stack1.push(val);
  }

  pop() {
    if (!this.stack2.length) {
      while (this.stack1.length) this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }
}
