function breadthFirstSearch(startingNode, targetVal) {
    let queue = [startingNode];
    const checked = new Set();
    while (queue.length){
        let root = queue.shift();
        if (root.val === targetVal) return root;
        let neighbors = root.neighbors.filter(node => !checked.has(node.val));
        checked.add(root.val);
        queue = queue.concat(neighbors);
    };
    return null;
}

module.exports = {
    breadthFirstSearch
};