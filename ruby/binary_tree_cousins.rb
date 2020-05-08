# In a binary tree, the root node is at depth 0, and children of each depth k node are 
# at depth k+1.

# Two nodes of a binary tree are cousins if they have the same depth, but have different 
# parents.

# We are given the root of a binary tree with unique values, and the values x and y of 
# two different nodes in the tree.

# Return true if and only if the nodes corresponding to the values x and y are cousins.

 

# Example 1:


# Input: root = [1,2,3,4], x = 4, y = 3
# Output: false
# Example 2:


# Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
# Output: true
# Example 3:



# Input: root = [1,2,3,null,4], x = 2, y = 3
# Output: false
 

# Note:

# The number of nodes in the tree will be between 2 and 100.
# Each node has a unique integer value from 1 to 100.

class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val = 0, left = nil, right = nil)
        @val = val
        @left = left
        @right = right
    end
end

def is_cousins(root, x, y)
    depth = 0
    total_count = 1
    first_found = false
    first_idx = false
    which = false
    queue = [root]
    idx = 0
    until idx == queue.length do
        node = queue[idx]
        if node 
            queue << node.left
            queue << node.right
        end
        idx += 1
    end
    queue.each_with_index do |node, idx|
        # print('idx: ', idx, ' total: ', total_count)
        # puts
        if idx == total_count
            depth += 1 
            total_count += depth * 2
        end
        if node && !first_found && (node.val == x || node.val == y)
            first_found = depth
            which = node.val == x ? 'x' : 'y'
            first_idx = idx
        end
        # print('first: ', first_found, ' depth: ', depth)
        # puts
        return true if first_found && first_found == depth && idx - first_idx > 1 && node && ((node.val == y && which == 'x') || (node.val == x && which == 'y'))
    end
    return false
end

a = TreeNode.new(1)
b = TreeNode.new(2)
c = TreeNode.new(3)
d = TreeNode.new(4)
e = TreeNode.new(5)

a.left = b
b.right = c
c.right = d
d.left = e

p is_cousins(a, 3, 4)

# not quite