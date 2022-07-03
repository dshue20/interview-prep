// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

var searchRange = function (nums, target) {
  let first = findTarget(nums, target);
  let last = first;
  if (first === -1) return [first, last];

  let newFirst = findTarget(nums.slice(0, first), target);
  while (newFirst !== -1 && first) {
    first = newFirst;
    newFirst = findTarget(nums.slice(0, first), target);
  }

  let newLast = findTarget(nums.slice(last + 1), target);
  // console.log(newLast, nums.slice(last+1))
  while (newLast !== -1 && last < nums.length - 1) {
    last = newLast + last + 1;
    newLast = findTarget(nums.slice(last + 1), target);
  }

  return [first, last];
};

var findTarget = function (nums, target) {
  if (!nums.length) return -1;
  let midIdx = Math.floor(nums.length / 2);
  if (nums[midIdx] > target) {
    return findTarget(nums.slice(0, midIdx), target);
  } else if (nums[midIdx] < target) {
    let answer = findTarget(nums.slice(midIdx + 1), target);
    return answer === -1 ? -1 : answer + midIdx + 1;
  } else {
    return midIdx;
  }
};
