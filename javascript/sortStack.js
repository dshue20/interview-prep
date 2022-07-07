// Write a program to sort a stack such that the smallest items are on the top.
// You can use one additional temporary stack, but you may not use any other
// data structure (such as an array).
// The stack supports the following operations: push, pop, peek, and isEmpty.

const sortStack = (stack) => {
  let stack2 = new Stack();
  while (!stack.isEmpty) {
    if (stack2.isEmpty || stack.peek() > stack2.peek()) {
      stack2.push(stack.pop());
    } else {
      let toAdd = stack.pop();
      while (stack2.peek() > toAdd) {
        stack.push(stack2.pop());
      }
      stack2.push(toAdd);
    }
  }
  while (!stack2.isEmpty) {
    stack.push(stack2.pop());
  }
};
