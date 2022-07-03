// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

var numIslands = function (grid) {
  let numIslands = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === '1') {
        grid[row][col] = 'I';
        let queue = getAdjacentLand(grid, row, col);
        while (queue.length) {
          let tile = queue.pop();
          grid[tile[0]][tile[1]] = 'I';
          queue.push(...getAdjacentLand(grid, tile[0], tile[1]));
        }
        numIslands++;
      }
    }
  }
  return numIslands;
};

var getAdjacentLand = function (grid, row, col) {
  let tiles = [];
  if (grid[row][col - 1] === '1') tiles.push([row, col - 1]);
  if (grid[row][col + 1] === '1') tiles.push([row, col + 1]);

  if (row > 0) {
    if (grid[row - 1][col] === '1') tiles.push([row - 1, col]);
  }

  if (row < grid.length - 1) {
    if (grid[row + 1][col] === '1') tiles.push([row + 1, col]);
  }

  return tiles;
};
