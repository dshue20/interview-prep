// Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

 

// Example 1:

// Input: matrix =
// [
//   [0,1,1,1],
//   [1,1,1,1],
//   [0,1,1,1]
// ]
// Output: 15
// Explanation: 
// There are 10 squares of side 1.
// There are 4 squares of side 2.
// There is  1 square of side 3.
// Total number of squares = 10 + 4 + 1 = 15.
// Example 2:

// Input: matrix = 
// [
//   [1,0,1],
//   [1,1,0],
//   [1,1,0]
// ]
// Output: 7
// Explanation: 
// There are 6 squares of side 1.  
// There is 1 square of side 2. 
// Total number of squares = 6 + 1 = 7.
 

// Constraints:

// 1 <= arr.length <= 300
// 1 <= arr[0].length <= 300
// 0 <= arr[i][j] <= 1

var countSquares = function(matrix) {
    const width = matrix[0].length;
    const height = matrix.length;
    let count = 0;
    for (let i=0; i < height; i++){
        for (let j=0; j < width; j++){
            if (matrix[i][j] === 1){
                count += 1;
                let currHeight = i;
                let currWidth = j;
                while (currHeight+1 < height && currWidth+1 < width){
                    if (matrix[currHeight + 1][currWidth] === 1 && matrix[currHeight][currWidth + 1] && matrix[currHeight + 1][currWidth + 1] === 1){
                        count += 1;
                    } else {
                        break;
                    }
                    currHeight += 1;
                    currWidth += 1;
                };
            };
        };
    };
    return count;
};

console.log(countSquares([
    [0,1,1,1],
    [1,1,0,1],
    [1,1,1,1],
    [1,0,1,0]
]))

// not quite