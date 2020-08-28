# Given an array of integers (positive and negative) find the largest contiguous subsum (sum of a subarray).

# You can solve this trivially in O(n**2) time by considering all subarrays. Try to solve it in O(n) time with O(1) memory.

def largest_sum(arr)
    biggest = 0
    total = 0
    arr.each do |num|
        total = [0, total+num].max
        biggest = total if total > biggest
    end
    biggest
end

p largest_sum([1, 2, -2, 4, -4]) # => 5