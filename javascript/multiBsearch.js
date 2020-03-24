var searchRange = function(nums, target) {
    let result = [-1, -1];
    let numsCopy = [...nums];
    let startIdx = 0;
    while (numsCopy.length > 0){
        let mid = Math.floor(numsCopy.length/2);
         if (target < numsCopy[0] || target > numsCopy[numsCopy.length-1]) {
            return result;
        } else if (numsCopy[mid] === target){
            let idx = mid + startIdx;
            result[0] = idx;
            result[1] = idx;
            let lower = idx - 1;
            while (nums[lower] === target && lower >= 0){
                result[0] = lower;
                lower--;
            }
            let upper = idx + 1;
            while (nums[upper] === target && upper < nums.length){
                result[1] = upper;
                upper++;
            }
            return result;
        } else if (numsCopy[mid] < target){
            numsCopy = numsCopy.slice(mid+1);
            startIdx += mid+1;
        } else {
            numsCopy = numsCopy.slice(0, mid);
        }   
    };
    return result;
};

// console.log(searchRange([5,7,7,8,8,10], 6));
// console.log(searchRange([1,3], 1));
console.log(searchRange([0,0,2,3,4,4,4,5], 5));