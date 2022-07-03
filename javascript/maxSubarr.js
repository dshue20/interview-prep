// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

var maxSubArray = function (nums) {
  let startIdx = 1;
  let maxSum = nums[0];
  let currSum = nums[0];
  while (startIdx < nums.length) {
    if (currSum < 0) {
      currSum = nums[startIdx];
    } else {
      currSum += nums[startIdx];
    }
    if (currSum > maxSum) maxSum = currSum;
    startIdx++;
  }
  return maxSum;
};
