# There are n people whose IDs go from 0 to n - 1 and each person belongs 
# exactly to one group. Given the array groupSizes of length n telling the group 
# size each person belongs to, return the groups there are and the people's IDs 
# each group includes.

# You can return any solution in any order and the same applies for IDs. Also, 
# it is guaranteed that there exists at least one solution. 

 

# Example 1:

# Input: groupSizes = [3,3,3,3,3,1,3]
# Output: [[5],[0,1,2],[3,4,6]]
# Explanation: 
# Other possible solutions are [[2,1,6],[5],[0,4,3]] and [[5],[0,6,2],[4,3,1]].
# Example 2:

# Input: groupSizes = [2,1,3,3,3,2]
# Output: [[1],[0,5],[2,3,4]]
 

# Constraints:

# groupSizes.length == n
# 1 <= n <= 500
# 1 <= groupSizes[i] <= n

def group_the_people(group_sizes)
    result = []
    hash = {}
    group_sizes.each_with_index do |size, idx|
        # p hash[size]
        if hash[size] && hash[size].any? {|space| space == nil}
            hash[size][hash[size].index(nil)] = idx
        else
            # result << hash[size] if hash[size]
            hash[size] = Array.new(size)
            hash[size][0] = idx
        end
        result << hash[size] if hash[size].none? {|space| space == nil}
    end
    result
end

p group_the_people([3,3,3,3,3,1,3])
p group_the_people([2,1,3,3,3,2])