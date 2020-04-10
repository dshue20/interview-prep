// In an array A of 0s and 1s, how many non-empty subarrays have sum S?

// Example 1:

// Input: A = [1,0,1,0,1], S = 2
// Output: 4
// Explanation: 
// The 4 subarrays are bolded below:
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
 

// Note:

// A.length <= 30000
// 0 <= S <= A.length
// A[i] is either 0 or 1.

var numSubarraysWithSum = function(arr, s) {
    let count = 0;
    let startIdx = 0;
    let currentCount = 0;
    let currentIdx = 0;
    while (startIdx <= Math.min(arr.length - s, arr.length - 1)){
        if (arr[currentIdx] === 1) currentCount++;
        if (currentCount === s){
            count++;
            currentIdx++;
            while (arr[currentIdx] === 0 && currentIdx < arr.length) {
                count++;
                currentIdx++;
            };
            startIdx++;
            currentIdx = startIdx;
            currentCount = 0;
        } else if (currentIdx === arr.length - 1){
            startIdx++;
            currentIdx = startIdx;
            currentCount = 0;
        } else {
            currentIdx++;
        };
    };
    return count;
};