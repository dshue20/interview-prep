// Find the sum of all left leaves in a given binary tree.

var sumOfLeftLeaves = function(root) {
    if (!root) return 0;
    if (root.left && !root.left.left && !root.left.right) return root.left.val + sumOfLeftLeaves(root.right);
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};