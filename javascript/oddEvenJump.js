// You are given an integer array arr. From some starting index, you can make a series of jumps. The (1st, 3rd, 5th, ...) jumps in the series are called odd-numbered jumps, and the (2nd, 4th, 6th, ...) jumps in the series are called even-numbered jumps. Note that the jumps are numbered, not the indices.

// You may jump forward from index i to index j (with i < j) in the following way:

// During odd-numbered jumps (i.e., jumps 1, 3, 5, ...), you jump to the index j such that arr[i] <= arr[j] and arr[j] is the smallest possible value. If there are multiple such indices j, you can only jump to the smallest such index j.
// During even-numbered jumps (i.e., jumps 2, 4, 6, ...), you jump to the index j such that arr[i] >= arr[j] and arr[j] is the largest possible value. If there are multiple such indices j, you can only jump to the smallest such index j.
// It may be the case that for some index i, there are no legal jumps.
// A starting index is good if, starting from that index, you can reach the end of the array (index arr.length - 1) by jumping some number of times (possibly 0 or more than once).

// Return the number of good starting indices.

var oddEvenJumps = function (arr) {
  let numGoodIndices = 1;
  let storedVals = Array.from(new Array(arr.length), (x) => []);
  storedVals[arr.length - 1] = ['even', 'odd'];
  for (let i = arr.length - 2; i >= 0; i--) {
    // odd jump
    const indexToJumpTo = oddJump(i, arr);
    // console.log('jumpidx: ', indexToJumpTo);
    if (indexToJumpTo && storedVals[indexToJumpTo].includes('even')) {
      numGoodIndices++;
      storedVals[i].push('odd');
    }

    // even jump
    const evenJumpIdx = evenJump(i, arr);
    if (evenJumpIdx && storedVals[evenJumpIdx].includes('odd')) {
      storedVals[i].push('even');
    }

    // console.log('storedVals: ', storedVals);
  }
  return numGoodIndices;
};

const oddJump = (i, arr) => {
  let jumpIdx;
  let minVal;
  const startVal = arr[i];
  for (let idx = i + 1; idx < arr.length; idx++) {
    val = arr[idx];
    if (val >= startVal && (val < minVal || !minVal)) {
      jumpIdx = idx;
      minVal = val;
    }
  }
  return jumpIdx;
};

const evenJump = (i, arr) => {
  let jumpIdx;
  let maxVal;
  const startVal = arr[i];
  for (let idx = i + 1; idx < arr.length; idx++) {
    val = arr[idx];
    if (val <= startVal && (val > maxVal || !maxVal)) {
      jumpIdx = idx;
      maxVal = val;
    }
  }
  return jumpIdx;
};

console.log(oddEvenJumps([5, 1, 3, 4, 2]));
