// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

var maxArea = function (arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let max = (rightIdx - leftIdx) * Math.min(arr[leftIdx], arr[rightIdx]);
  while (leftIdx !== rightIdx) {
    let leftVal = arr[leftIdx];
    let rightVal = arr[rightIdx];
    if (leftVal < rightVal) {
      while (arr[leftIdx] <= leftVal && leftIdx !== rightIdx) {
        leftIdx++;
      }
      let current =
        (rightIdx - leftIdx) * Math.min(arr[leftIdx], arr[rightIdx]);
      if (current > max) max = current;
    } else {
      while (arr[rightIdx] <= rightVal && leftIdx !== rightIdx) {
        rightIdx--;
      }
      current = (rightIdx - leftIdx) * Math.min(arr[leftIdx], arr[rightIdx]);
      if (current > max) max = current;
    }
  }
  return max;
};
