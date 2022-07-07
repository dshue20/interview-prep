// Given an integer array nums where the elements are sorted in ascending order,
// convert it to a height-balanced binary search tree.

// A height-balanced binary tree is a binary tree in which the depth of the two
// subtrees of every node never differs by more than one.

var sortedArrayToBST = function (arr) {
  if (!arr.length) return null;
  if (arr.length === 1) return new TreeNode(arr[0]);
  let midPt = Math.floor(arr.length / 2);
  let root = new TreeNode(arr[midPt]);
  root.left = sortedArrayToBST(arr.slice(0, midPt));
  root.right = sortedArrayToBST(arr.slice(midPt + 1));
  return root;
};
