// You are given an m x n char matrix board representing the game board where:

// 'M' represents an unrevealed mine,
// 'E' represents an unrevealed empty square,
// 'B' represents a revealed blank square that has no adjacent mines (i.e., above, below, left, right, and all 4 diagonals),
// digit ('1' to '8') represents how many mines are adjacent to this revealed square, and
// 'X' represents a revealed mine.
// You are also given an integer array click where click = [clickr, clickc] represents the next click position among all the unrevealed squares ('M' or 'E').

// Return the board after revealing this position according to the following rules:

// If a mine 'M' is revealed, then the game is over. You should change it to 'X'.
// If an empty square 'E' with no adjacent mines is revealed, then change it to a revealed blank 'B' and all of its adjacent unrevealed squares should be revealed recursively.
// If an empty square 'E' with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines.
// Return the board when no more squares will be revealed.

var updateBoard = function (board, click) {
  let [row, col] = click;
  if (board[row][col] === 'M') {
    board[row][col] = 'X';
  } else {
    const numAdjacentMines = checkForAdjacentMines(board, row, col);
    if (numAdjacentMines > 0) {
      board[row][col] = numAdjacentMines.toString();
    } else {
      board[row][col] = 'B';
      for (coord of getAdjacentCoords(board, row, col)) {
        board = updateBoard(board, coord);
      }
    }
  }
  return board;
};

var checkForAdjacentMines = function (board, row, col) {
  let numMines = 0;
  if (row !== 0) {
    if (col !== 0 && board[row - 1][col - 1] === 'M') numMines++;
    if (board[row - 1][col] === 'M') numMines++;
    if (col !== board[row].length - 1 && board[row - 1][col + 1] === 'M')
      numMines++;
  }
  if (row !== board.length - 1) {
    if (col !== 0 && board[row + 1][col - 1] === 'M') numMines++;
    if (board[row + 1][col] === 'M') numMines++;
    if (col !== board[row].length - 1 && board[row + 1][col + 1] === 'M')
      numMines++;
  }
  if (col !== 0 && board[row][col - 1] === 'M') numMines++;
  if (col !== board[0].length - 1 && board[row][col + 1] === 'M') numMines++;
  return numMines;
};

var getAdjacentCoords = function (board, row, col) {
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
  let coords = [];
  for (let adjustment of adjustments) {
    let x = row + adjustment[0];
    let y = col + adjustment[1];
    if (
      x >= 0 &&
      x < board.length &&
      y >= 0 &&
      y < board[0].length &&
      board[x][y] === 'E'
    )
      coords.push([x, y]);
  }
  return coords;
};

console.log(
  updateBoard(
    [
      ['E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'M', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E'],
    ],
    [3, 0]
  )
); // =>
// [
//   ['B', '1', 'E', '1', 'B'],
//   ['B', '1', 'M', '1', 'B'],
//   ['B', '1', '1', '1', 'B'],
//   ['B', 'B', 'B', 'B', 'B'],
// ];
