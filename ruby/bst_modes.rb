# Given a binary search tree (BST) with duplicates, find all the mode(s) 
# (the most frequently occurred element) in the given BST.

# Assume a BST is defined as follows:

# The left subtree of a node contains only nodes with keys less than or equal to the 
# node's key.
# The right subtree of a node contains only nodes with keys greater than or equal to the 
# node's key.
# Both the left and right subtrees must also be binary search trees.
 

# For example:
# Given BST [1,null,2,2],

#    1
#     \
#      2
#     /
#    2
 

# return [2].

# Note: If a tree has more than one mode, you can return them in any order.

# Follow up: Could you do that without using any extra space? (Assume that the implicit 
# stack space incurred due to recursion does not count).

class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end

def find_mode(root)
    return [] if !root
    count = Hash.new
    count.default = 0
    queue = [root]
    while !queue.empty? do
        root = queue.shift
        count[root.val] += 1 
        queue << root.left if root.left
        queue << root.right if root.right
    end
    max = count.values.max
    count.keys.select {|key| count[key] == max}
end

a = TreeNode.new(1)
b = TreeNode.new(2)
c = TreeNode.new(2)

a.right = b
b.left = c

p find_mode(a)