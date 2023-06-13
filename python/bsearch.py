import math
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        if not len(nums): return -1
        midpt = math.floor(len(nums)/2)
        midnum = nums[midpt]
        if midnum == target:
            return midpt
        elif midnum > target:
            return self.search(nums[:midpt], target)
        else:
            recursive = self.search(nums[midpt+1:], target)
            return -1 if recursive == -1 else midpt + 1 + self.search(nums[midpt+1:], target)