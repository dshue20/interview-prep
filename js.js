var twoSum = function(nums, target) {
    const length = nums.length;
    for (let i=0; i < length; i++){
        let firstNum = nums.shift();
        console.log(firstNum);
        console.log(nums);
        if (nums.includes(target - firstNum)) {
            console.log('hi');
            return [i, nums.indexOf(target - firstNum) + i + 1]
        }
        console.log('i: ', i)
    }
    return 'derek';
};

console.log(twoSum([1,3,4,2], 6));