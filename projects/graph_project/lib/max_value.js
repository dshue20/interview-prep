function maxValue(node, visited=new Set()) {
    let queue = [node];
    let max = -Infinity;
    while (queue.length){
        let root = queue.shift();
        if (root.val > max) max = root.val;
        visited.add(root.val);
        let neighbors = root.neighbors.filter(node => !visited.has(node.val));
        queue = queue.concat(neighbors);
    };
    return max;
}

module.exports = {
    maxValue
};