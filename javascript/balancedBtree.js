// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:
// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

var isBalanced = function (root) {
  return (
    !root ||
    (Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1 &&
      isBalanced(root.left) &&
      isBalanced(root.right))
  );
};

var maxDepth = function (root) {
  return root ? Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right)) : 0;
};
