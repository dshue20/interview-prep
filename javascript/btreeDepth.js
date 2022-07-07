// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest
// path from the root node down to the farthest leaf node.

var maxDepth = function (root) {
  return root ? Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right)) : 0;
};
