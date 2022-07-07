// Imagine a stack of plates. If the stack gets too high, it might topple.
// Therefore, we would likely start a new stack when the previous stack
// exceeds some threshold. Implement a data structure SetOfStacks that
// mimics this. SetOfStacks should be composed of several stacks and
// should create a new stack once the previous one exceeds capacity.
// SetOfStacks.push() and SetOfStacks.pop() should behave identically
// to a single stack.

class SetOfStacks {
  constructor(numStacks) {
    this.stacks = [];
    for (let num in numStacks) this.stacks.push(new Stack());
  }

  push(val) {
    let added = false;
    for (let stack of this.stacks) {
      if (stack.size < stack.maxSize) {
        stack.push(val);
        added = true;
        break;
      }
    }
    if (!added) console.log('Sorry, all the stacks are full.');
  }

  pop() {
    for (let i = this.stacks.length - 1; i >= 0; i--) {
      let stack = this.stacks[i];
      if (stack.size) return stack.pop();
    }
    console.log('All stacks are empty');
  }
}

class Stack {
  constructor(size) {
    this.stack = [];
    this.maxSize = size;
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    return this.stack.pop();
  }

  size() {
    return this.stack.length;
  }
}
