# Return the root node of a binary search tree that matches the given preorder traversal.

# (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left 
# has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a 
# preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

# It's guaranteed that for the given test cases there is always possible to find a binary search tree with the 
# given requirements.

# Example 1:

# Input: [8,5,1,7,10,12]
# Output: [8,5,10,1,7,null,12]


class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val = 0, left = nil, right = nil)
        @val = val
        @left = left
        @right = right
    end
end

def bst_from_preorder(preorder)
    return nil if preorder.nil? || preorder.empty?
    root = TreeNode.new(preorder[0])
    right_idx = 999999
    preorder.each_with_index do |val, idx|
         if val > root.val
             right_idx = idx
             break
         end
    end
    root.left = bst_from_preorder(preorder[1...right_idx])
    root.right = bst_from_preorder(preorder[right_idx..-1])
    root
end

p bst_from_preorder([8,5,1,7,10,12])