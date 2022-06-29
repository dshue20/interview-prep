// Imagine an island that is in the shape of a bar graph. When it rains, certain areas of the island fill up with rainwater to form lakes. Any excess rainwater the island cannot hold in lakes will run off the island to the west or east and drain into the ocean.

// Given an array of positive integers representing 2-D bar heights, design an algorithm (or write a function) that can compute the total volume (capacity) of water that could be held in all lakes on such an island given an array of the heights of the bars. Assume an elevation map where the width of each bar is 1.

// Example: Given [1,3,2,4,1,3,1,4,5,2,2,1,4,2,2], return 15 (3 bodies of water with volumes of 1,7,7 yields total volume of 15)

const findVolume = (arr) => {
  let idx = 0;
  let currentValleyStart;
  let totalVolume = 0;
  let currentVolume = 0;
  let localMaxIdx;
  while (idx < arr.length) {
    currentValleyStart = idx;
    idx++;
    while (idx < arr.length && arr[currentValleyStart] > arr[idx]) {
      currentVolume += arr[currentValleyStart] - arr[idx];
      idx++;
    }
    if (currentVolume && idx >= arr.length) {
      idx = currentValleyStart + 1;
      while (idx < arr.length) {
        if (
          (!localMaxIdx || arr[idx] > arr[localMaxIdx]) &&
          arr[idx] > arr[idx - 1]
        ) {
          localMaxIdx = idx;
        }
        idx++;
      }
      if (localMaxIdx) {
        idx = localMaxIdx - 1;
        while (idx !== currentValleyStart) {
          if (arr[idx] < arr[localMaxIdx]) {
            totalVolume += arr[localMaxIdx] - arr[idx];
          }
          idx--;
        }
        currentVolume = 0;
        idx = localMaxIdx;
        localMaxIdx = null;
      }
    } else {
      totalVolume += currentVolume;
      currentVolume = 0;
    }
  }
  return totalVolume;
};

console.log(findVolume([1, 3, 2, 4, 1, 3, 1, 4, 5, 2, 2, 1, 4, 2, 2])); // => 15
console.log(findVolume([1, 3, 2, 4, 1, 3, 1, 4, 5, 2, 2, 1, 4, 2, 6])); // => 22?
console.log(findVolume([1, 3, 2, 4, 1, 3, 1, 4, 5, 2, 2, 1, 2, 2, 2])); // => 9
console.log(findVolume([1, 3, 2, 4, 1, 3, 1, 4, 5, 2, 2, 2, 2, 2, 2])); // => 8
