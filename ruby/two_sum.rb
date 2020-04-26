# Given an array of integers, find two numbers such that they add up to a specific 
# target number.

# The function twoSum should return indices of the two numbers such that they add up 
# to the target, where index1 < index2. Please note that your returned answers (both 
# index1 and index2 ) are not zero-based.
# Put both these numbers in order in an array and return the array from your function 
# ( Looking at the function signature will make things clearer ). Note that, if no pair 
# exists, return empty list.

# If multiple solutions exist, output the one where index2 is minimum. If there are
# multiple solutions with the minimum index2, choose the one with minimum index1 out of them.

# Input: [2, 4, 5, 11, 15, 7], target=9
# Output: index1 = 1, index2 = 2

def two_sum(arr, target)
    hash = {}
    arr.each_with_index do |num, idx|
        hash[num] = idx if !hash[num]
        return [hash[target-num], idx] if hash[target-num]
    end
    nil
end

p two_sum([2,4,5,11,15,7], 9)