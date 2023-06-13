class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dict = {}
        for i in range(0,len(nums)):
            diff = target - nums[i]
            if diff in dict:
                return [dict[diff], i]
            else:
                dict[nums[i]] = i