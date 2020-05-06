# Given an array nums, write a function to move all 0's to the end of it while 
# maintaining the relative order of the non-zero elements.

# Example:

# Input: [0,1,0,3,12]
# Output: [1,3,12,0,0]
# Note:

# You must do this in-place without making a copy of the array.
# Minimize the total number of operations.

# def move_zeroes(nums)
#     last_pointer = nums.length-1
#     until last_pointer == 0 do
#         moving_pointer = last_pointer - 1
#         if nums[last_pointer] != 0
#             until moving_pointer == -1 do
#                if nums[moving_pointer] == 0
#                    nums[moving_pointer], nums[last_pointer] = nums[last_pointer], nums[moving_pointer]
#                    moving_pointer = -1
#                else
#                    moving_pointer -= 1
#                    return nums if moving_pointer == -1
#                end
#             end
#         else
#             last_pointer -= 1
#         end
#     end
#     nums
# end

def move_zeroes(nums)
    nums.each_with_index do |num, idx|
        nums.push(nums.delete_at(idx)) if num == 0
        print(num, ' ', idx, ' ', nums)
        puts
    end
    nums
end

p move_zeroes([0,0,1])