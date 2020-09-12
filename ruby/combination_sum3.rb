# Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

# Note:

# All numbers will be positive integers.
# The solution set must not contain duplicate combinations.
# Example 1:

# Input: k = 3, n = 7
# Output: [[1,2,4]]
# Example 2:

# Input: k = 3, n = 9
# Output: [[1,2,6], [1,3,5], [2,3,4]]

def combination_sum3(k, n, nums=(1..9).to_a)
    return nums.include?(n) ? [[n]] : [] if k == 1
    total = []
    nums.each do |num|
        sub = combination_sum3(k-1, n-num, ((num+1)..9).to_a)
        sub.each{|arr| total << [num] + arr}
    end
    total
end

p combination_sum3(2,10)