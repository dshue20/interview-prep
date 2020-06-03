# Invert a binary tree.

# Example:

# Input:

#      4
#    /   \
#   2     7
#  / \   / \
# 1   3 6   9
# Output:

#      4
#    /   \
#   7     2
#  / \   / \
# 9   6 3   1

class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val = 0, left = nil, right = nil)
        @val = val
        @left = left
        @right = right
    end
end

def invert_tree(root)
    return [] if root.nil?
    queue = [root]
    vals = []
    while !queue.empty? do
        curr = queue.shift
        vals << curr
        queue << curr.right if curr
        queue << curr.left if curr
    end
    make_tree(vals)
end

def make_tree(vals)
    p vals.map{|x| x.nil? ? nil : x.val}
    root = vals.shift
    queue = []
    curr = root
    while !vals.empty? do
        unless curr.nil?
            left = vals.shift
            right = vals.shift
            queue << left
            queue << right
            curr.left = left if curr
            curr.right = right if curr
        end
        curr = queue.shift
    end
    root
end

root = TreeNode.new(2)
root.left = TreeNode.new(3)
# root.right = TreeNode.new(7)
root.left.left = TreeNode.new(1)
# root.left.right = TreeNode.new(3)
# root.right.left = TreeNode.new(6)
# root.right.right = TreeNode.new(9)

p invert_tree(root)