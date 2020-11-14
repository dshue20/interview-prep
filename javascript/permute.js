// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

var permute = function(nums) {
    if (nums.length <= 1) return [nums];
    const result = [];
    const first = nums.pop();
    const prevPerms = permute(nums);
    const hash = {};
    prevPerms.forEach(perm => {
        for (let i = 0; i <= perm.length; i++) {
            let nextPerm = perm.slice(0, i).concat([first]).concat(perm.slice(i));
            if (!hash[nextPerm]) result.push(nextPerm);
            hash[nextPerm] = true;
        }
    });
    return result;
};

console.log(permute([1,1,2]));