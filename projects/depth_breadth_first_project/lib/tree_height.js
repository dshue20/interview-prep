function treeHeight(root) {
if (!root) return -1;
let height = 0;
height = Math.max(treeHeight(root.left) + 1, treeHeight(root.right) + 1);
return height;
}


module.exports = {
    treeHeight
};