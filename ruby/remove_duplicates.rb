# Given a sorted array nums, remove the duplicates in-place such that each element appear 
# only once and return the new length.

# Do not allocate extra space for another array, you must do this by modifying the input 
# array in-place with O(1) extra memory.

# Example 1:

# Given nums = [1,1,2],

# Your function should return length = 2, with the first two elements of nums being 
# 1 and 2 respectively.

# It doesn't matter what you leave beyond the returned length.
# Example 2:

# Given nums = [0,0,1,1,1,2,2,3,3,4],

# Your function should return length = 5, with the first five elements of nums being 
# modified to 0, 1, 2, 3, and 4 respectively.

# It doesn't matter what values are set beyond the returned length.

require 'Set'

def remove_duplicates(nums)
    set = Set.new
    idx = 0
    while nums[idx] do
       if set.include?(nums[idx])
           nums.delete_at(idx)
       else
           set.add(nums[idx]) 
           idx += 1
       end
       p nums
       p idx
    end
    nums
end

p remove_duplicates([-1,0,0,0,0,3,3])