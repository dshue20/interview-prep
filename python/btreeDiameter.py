# Given the root of a binary tree, return the length of the diameter of the tree.

# The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

# The length of a path between two nodes is represented by the number of edges between them.

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        if not root or (not root.left and not root.right): return 0
        return max(self.getHeight(root.left) + self.getHeight(root.right), self.diameterOfBinaryTree(root.left), self.diameterOfBinaryTree(root.right))

    def getHeight(self, root: Optional[TreeNode]) -> int:
        if not root: return 0
        return max(self.getHeight(root.left) + 1, self.getHeight(root.right) + 1)