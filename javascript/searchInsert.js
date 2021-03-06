// Given a sorted array and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 4:

// Input: [1,3,5,6], 0
// Output: 0

var searchInsert = function(nums, target) {
    if (!nums.length) return 0;
    const midIdx = Math.floor(nums.length/2);
    const midVal = nums[midIdx];
    if (midVal === target){
        return midIdx;
    } else if (midVal > target){
        return searchInsert(nums.slice(0,midIdx), target);
    } else {
        return searchInsert(nums.slice(midIdx+1), target) + midIdx + 1;
    }
};

console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));
console.log(searchInsert([1,3,5,6], 0));