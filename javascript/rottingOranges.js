// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

 

// Example 1:


// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 10
// grid[i][j] is 0, 1, or 2.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let minutes = 0;
    let queue = [];
    for (let x=0; x < grid.length; x++){
        for (let y=0; y < grid[0].length; y++){
            if (grid[x][y] === 2) queue.push([x,y]);
        }
    }
    let newQueue = [];
    let noChange = false;
    while (queue.length){
        let [x,y] = queue.pop();
        res = becomeRotten(grid, x, y);
        grid = res.grid;
        newQueue = newQueue.concat(res.queue);
        noChange = noChange || res.noChange;
        if (!queue.length){
            if (!noChange) return checkForFresh(grid) ? -1 : minutes;
            minutes++;
            queue = newQueue;
            newQueue = [];
            noChange = false;
        }
    }
    return checkForFresh(grid) ? -1 : minutes;
};

var becomeRotten = function(grid, x, y){
    const queue = [];
    let noChange = false;
    if (x > 0 && grid[x-1][y] === 1){
        grid[x-1][y] = 2;
        queue.push([x-1, y]);
        noChange = true;
    }
    if (y > 0 && grid[x][y-1] === 1){
        grid[x][y-1] = 2;
        queue.push([x, y-1]);
        noChange = true;
    }
    if (x < grid.length - 1 && grid[x+1][y] === 1){
        grid[x+1][y] = 2;
        queue.push([x+1, y]);
        noChange = true;
    }
    if (y < grid[0].length - 1 && grid[x][y+1] === 1){
        grid[x][y+1] = 2;
        queue.push([x, y+1]);
        noChange = true;
    }
    return {
        grid, queue, noChange
    }
}

var checkForFresh = function(grid){
    for (let x=0; x < grid.length; x++){
        for (let y=0; y < grid[0].length; y++){
            if (grid[x][y] === 1) return true;
        }
    }
    return false;
}
