// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((left+right)/2);
    if (nums[mid] == target){
        return mid;
    } else if (nums.length <= 1){
        return -1;
    } else if (nums[left] <= nums[mid]){
        if (nums[left] <= target && nums[mid] >= target){
            return search(nums.slice(0,mid+1), target);
        } else {
            let answer = search(nums.slice(mid+1), target);
            return answer == -1 ? answer : mid + 1 + answer;
        }
    } else {
        if (nums[mid+1] <= target && nums[right] >= target){
            let answer = search(nums.slice(mid+1), target);
            return answer == -1 ? answer : mid + 1 + answer;
        } else {
            return search(nums.slice(0,mid+1), target)
        }
    }
};