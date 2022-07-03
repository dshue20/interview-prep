// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

var gameOfLife = function (board) {
  let copy = [];
  for (let row of board) {
    let newRow = [];
    newRow = newRow.concat(...row);
    copy.push(newRow);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const numNeighbors = getNumNeighbors(board, i, j);
      if (board[i][j] === 1) {
        // if it's alive
        console.log(i, j, numNeighbors);
        if (numNeighbors < 2 || numNeighbors > 3) copy[i][j] = 0;
        // console.log('copy: ', copy[i][j], copy[0][1], i, j, copy)
      } else {
        // if it's dead
        if (numNeighbors === 3) copy[i][j] = 1;
      }
      // console.log(copy);
    }
  }
  // console.log(copy);
  return copy;
};

var getNumNeighbors = function (board, row, col) {
  const adjustments = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  let numNeighbors = 0;
  // console.log('row: ', row, col)
  for (let adjustment of adjustments) {
    let x = row + adjustment[0];
    let y = col + adjustment[1];
    if (
      x >= 0 &&
      x < board.length &&
      y >= 0 &&
      y < board[0].length &&
      board[x][y] === 1
    ) {
      // console.log(x, y, numNeighbors)
      numNeighbors++;
    }
  }
  return numNeighbors;
};

console.log(
  gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ])
);
