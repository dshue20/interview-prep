const { TreeNode } = require('./tree_node');

function depthFirstSearch(root, targetVal) {
    while (root){
        if (root.val === targetVal) return root;
        const left = depthFirstSearch(root.left, targetVal);
        const right = depthFirstSearch(root.right, targetVal);
        return left || right;
    }
    return null;
}

let a = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
console.log(depthFirstSearch(a, 'e'));

module.exports = {
    depthFirstSearch
};