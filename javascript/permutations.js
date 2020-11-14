// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

// Example 1:

// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// Example 2:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 

// Constraints:

// 1 <= nums.length <= 8
// -10 <= nums[i] <= 10

var permuteUnique = function(nums) {
  // console.log(nums);
  if (!nums.length) return nums;
  if (nums.length === 1) return [nums];
  const toInsert = nums[0];
  const perms = permuteUnique(nums.slice(1));
  let inserted = [];
  console.log('perms: ', perms, nums.slice(1));
  let hash = {};
  perms.forEach(sub => {
    // console.log('sub: ', sub);
    let length = sub.length;
    for (let i=0; i <= length; i++){
      // console.log(sub.length);
      let copy = [...sub];
      copy.splice(i, 0, toInsert);
      if (!hash[copy]) inserted.push(copy);
      hash[copy] = true;
    }
    // console.log('inserted: ', inserted);
  });
  // console.log(inserted);
  return inserted;
};

console.log(permuteUnique([1,1,2]))