// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

var threeSum = function (nums) {
  if (nums.length < 3) return [];
  nums.sort((x, y) => x - y);
  let answers = [];
  let prevVal;
  for (let i = 0; i < nums.length; i++) {
    if (prevVal !== nums[i]) {
      let sum = twoSum(nums.slice(i + 1), nums[i] * -1);
      // console.log(sum)
      if (sum.length) {
        sum.map((subarr) => subarr.push(nums[i]));
        answers = answers.concat(sum);
      }
    }
    prevVal = nums[i];
  }
  return answers;
};

var twoSum = function (nums, target) {
  let answers = [];
  let seen = new Set();
  let leftIdx = 0;
  let rightIdx = nums.length - 1;
  while (leftIdx < rightIdx) {
    let sum = nums[leftIdx] + nums[rightIdx];
    if (sum < target) {
      leftIdx++;
    } else if (sum > target) {
      rightIdx--;
    } else {
      if (!answers.length || answers[answers.length - 1][0] !== nums[leftIdx])
        answers.push([nums[leftIdx], nums[rightIdx]]);
      leftIdx++;
      rightIdx--;
    }
  }
  // console.log(answers)
  return answers;
};
