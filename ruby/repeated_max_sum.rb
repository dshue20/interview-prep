# Given an integer array arr and an integer k, modify the array by repeating it k times.

# For example, if arr = [1, 2] and k = 3 then the modified array will be [1, 2, 1, 2, 1, 2].

# Return the maximum sub-array sum in the modified array. Note that the length of the 
# sub-array can be 0 and its sum in that case is 0.

# As the answer can be very large, return the answer modulo 10^9 + 7.

 

# Example 1:

# Input: arr = [1,2], k = 3
# Output: 9
# Example 2:

# Input: arr = [1,-2,1], k = 5
# Output: 2
# Example 3:

# Input: arr = [-1,-2], k = 7
# Output: 0
 

# Constraints:

# 1 <= arr.length <= 10^5
# 1 <= k <= 10^5
# -10^4 <= arr[i] <= 10^4

# def k_concatenation_max_sum(arr, k)
#     return arr.sum * k if arr.all?(&:positive?)
#     return 0 if arr.all?(&:negative?)
#     max = 0
#     try = 0
#     repeated = arr * k
#     p repeated
#     repeated.each do |num|
#         try += num
#         max = try if try > max
#         try = 0 if try < 0
#     end
#     max
# end

def k_concatenation_max_sum(arr, k)
    return arr.sum * k if arr.all?(&:positive?)
    return 0 if arr.all?(&:negative?)
    total = arr.inject(0) {|sum, x| sum + x} * k
    try = total
    arr.each do |num|
        try -= num
        total = try if try > total
    end
    try = total
    arr.reverse.each do |num|
        try -= num
        total = try if try > total
    end
    total
end

p k_concatenation_max_sum([1,-2,1],3)