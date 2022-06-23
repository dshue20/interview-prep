// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.

let maxPath = -Infinity;
var maxPathSum = function (root) {
  maxPath = -Infinity;
  var inner = function (node) {
    if (!node) return 0;
    const leftPath = Math.max(inner(node.left), 0);
    const rightPath = Math.max(inner(node.right), 0);
    const currPath = node.val + leftPath + rightPath;
    if (currPath > maxPath) maxPath = currPath;
    return node.val + Math.max(leftPath, rightPath);
  };
  inner(root);
  return maxPath;
};
