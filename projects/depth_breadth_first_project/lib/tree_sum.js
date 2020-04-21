function treeSum(root) {
    if (!root) return 0;
    const queue = [root];
    let sum = 0;
    let currRoot;
    while (queue.length){
        currRoot = queue.shift();
        sum += currRoot.val;
        if (currRoot.left) queue.push(currRoot.left);
        if (currRoot.right) queue.push(currRoot.right);
    };
    return sum;
}


module.exports = {
    treeSum
};