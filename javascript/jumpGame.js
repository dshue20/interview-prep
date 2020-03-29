// Given an array of non-negative integers, you are initially positioned at the first 
// index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// Example:

// Input: [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2.
//     Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Note:

// You can assume that you can always reach the last index.

var jump = function(nums) {
	let position = nums.length - 1;
	let steps = 0;
	while (position !== 0) {
		for (let i = position - nums[position]; i < position; i++) {
			if (nums[i] >= position - i) {
				position = i;
				steps++;
				break;
			}
		}
	}
	return steps;
};

console.log(jump([2,3,1,1,4]));
// console.log(jump([5,6,4,4,6,9,4,4,7,4,4,8,2,6,8,1,5,9,6,5,2,7,9,7,9,6,9,4,1,6,8,8,4,4,2,0,3,8,5]));