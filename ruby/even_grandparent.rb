# Given a binary tree, return the sum of values of nodes with even-valued grandparent.  
# (A grandparent of a node is the parent of its parent, if it exists.)

# If there are no nodes with an even-valued grandparent, return 0.

class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end

def sum_even_grandparent(root)
    sum = 0
    queue = [root]
    while root
        if root.val.even?
            sum += root.left.left.val if root.left && root.left.left
            sum += root.left.right.val if root.left && root.left.right
            sum += root.right.left.val if root.right && root.right.left
            sum += root.right.right.val if root.right && root.right.right
        end
        queue.shift
        queue << root.left if root.left
        queue << root.right if root.right
        root = queue[0]
    end
    sum
end

root = TreeNode.new(61)
root.left = TreeNode.new(13)
root.right = TreeNode.new(46)
root.right.right = TreeNode.new(56)
root.right.right.left = TreeNode.new(72)

p sum_even_grandparent(root)