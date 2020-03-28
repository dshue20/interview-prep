// Given a set of candidate numbers (candidates) (without duplicates) and a 
// target number (target), find all unique combinations in candidates where the 
// candidate numbers sums to target.

// The same repeated number may be chosen from candidates unlimited number of times.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: candidates = [2,3,6,7], target = 7,
// A solution set is:
// [
//   [7],
//   [2,2,3]
// ]
// Example 2:

// Input: candidates = [2,3,5], target = 8,
// A solution set is:
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]



var combination_sum = function(candidates, target){
    if (target <= 0) return [[]];
    let result = [];
    for (i in candidates){
        let toAdd = [];
        let candidate = candidates[i];
        // console.log(candidate, target);
        if (target - candidate === 0){
            toAdd.push(candidate);
            result.push(toAdd);
        } else if (target - candidate > 0){
            toAdd.push(candidate);
            let toConcat = combination_sum(candidates, target - candidate);
            // console.log(toAdd, toConcat);
            toAdd = toAdd.concat(toConcat)[0];
            console.log(toAdd);
            result.push(toAdd);
        } else {
            break;
        }
    }
    return result;
}

console.log(combination_sum([2,3,6,7], 7));