// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
    if (!preorder.length) return null;
    const root = new TreeNode(preorder[0]);
    const idx = inorder.indexOf(preorder[0]);
    const leftInorder = inorder.slice(0, idx);
    const rightInorder = inorder.slice(idx+1);
    const leftPreorder = preorder.slice(1, leftInorder.length + 1);
    const rightPreorder = preorder.slice(1 + leftPreorder.length);
    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);
    return root;
}
