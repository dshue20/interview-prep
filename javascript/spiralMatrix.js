// Given a matrix of m x n elements (m rows, n columns), return all elements 
// of the matrix in spiral order.

// Example 1:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

var spiralOrder = function(matrix) {
    const ret = [];
    const tab = [...Array(matrix.length)].map(e => Array(matrix[0].length).fill(0));
    let [row, column] = [0, 0];
    let direction = 'right';
    while (ret.length !== matrix.length * matrix[0].length){
        if (direction === 'right'){
            if (tab[column] && tab[column][row] === 0){
                // console.log(tab[column]);
                ret.push(matrix[column][row]);
                tab[column][row] = 1;
                row++;
            } else {
                // console.log(direction);
                direction = 'down';
                row--;
                column++;
            } 
        } else if (direction === 'down'){
            if (tab[column] && tab[column][row] === 0){
                ret.push(matrix[column][row]);
                tab[column][row] = 1;
                column++;
            } else {
                direction = 'left';
                column--;
                row--;
            }
        } else if (direction === 'left'){
            if (tab[column] && tab[column][row] === 0){
                ret.push(matrix[column][row]);
                tab[column][row] = 1;
                row--;
            } else {
                direction = 'up';
                row++;
                column--;
            }
        } else if (direction === 'up'){
            if (tab[column] && tab[column][row] === 0){
                ret.push(matrix[column][row]);
                tab[column][row] = 1;
                column--;
            } else {
                direction = 'right';
                column++;
                row++;
            }
        }
    }
    return ret;
};

console.log(spiralOrder([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
   ]
));
console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
  ]
));
console.log(spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
  ]
));