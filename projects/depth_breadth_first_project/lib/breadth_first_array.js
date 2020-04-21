function breadthFirstArray(root) {
    const queue = [root];
    const result = [];
    let currRoot;
    while (queue.length){
        currRoot = queue.shift();
        result.push(currRoot.val);
        if (currRoot.left) queue.push(currRoot.left);
        if (currRoot.right) queue.push(currRoot.right);
    };
    return result;
}

module.exports = {
    breadthFirstArray
};