# Given an array S of n integers, are there elements a, b, c, and d in S such 
# that a + b + c + d = target? Find all unique quadruplets in the array which 
# gives the sum of target.

#  Note:
# Elements in a quadruplet (a,b,c,d) must be in non-descending order. (ie, a ≤ b ≤ c ≤ d)
# The solution set must not contain duplicate quadruplets.
# Example :
# Given array S = {1 0 -1 0 -2 2}, and target = 0
# A solution set is:

#     (-2, -1, 1, 2)
#     (-2,  0, 0, 2)
#     (-1,  0, 0, 1)
# Also make sure that the solution set is lexicographically sorted.
# Solution[i] < Solution[j] iff Solution[i][0] < Solution[j][0] OR 
# (Solution[i][0] == Solution[j][0] AND ... Solution[i][k] < Solution[j][k])

require 'Set'
require 'byebug'

def four_sum(arr, target)
    arr = arr.sort
    set = Set.new
    ret = []
    first, second, third, fourth = 0,1,2,3
    4.times do |idx|
        while fourth != arr.length
            if arr[first] + arr[second] + arr[third] + arr[fourth] == target
                sub = [arr[first], arr[second], arr[third], arr[fourth]]
                if !set.include?(sub)
                    ret << sub
                    set.add(sub)
                end
            end
            first += 1 if first != 0
            second += 1 if second != 1
            third += 1 if third != 2
            fourth += 1
        end
        if idx == 0
            third, fourth = 3, 4
        elsif idx == 1
            second, third, fourth = 2,3,4
        elsif idx == 2
            first, second, third, fourth = 1,2,3,4
        end
    end
    ret
end

p four_sum([1,0,-1,0,-2,2],0)

# doesn't work