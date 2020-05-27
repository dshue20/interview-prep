# Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

# Example 1:
# Input: [0,1]
# Output: 2
# Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
# Example 2:
# Input: [0,1,0]
# Output: 2
# Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
# Note: The length of the given binary array will not exceed 50,000.

def find_max_length(nums, zeros=0, ones=0)
    return 0 if nums.empty?
    if zeros == 0 && ones == 0
        nums.each do |num|
           if num == 0
               zeros += 1
           else
               ones += 1
           end
        end
    end
    return nums.length if zeros == ones
    zeros2, zeros3, ones2, ones3 = zeros, zeros, ones, ones
    
    if nums[0] == 0
        zeros2 -= 1
    else
        ones2 -= 1
    end
    
    if nums[-1] == 0
        zeros3 -= 1
    else
        ones3 -=1
    end
    return [find_max_length(nums[0...-1], zeros2, ones2), find_max_length(nums[1..-1], zeros3, ones3)].max
end

p find_max_length([0,1,1,0,1,1,1,0])

# can be optimized