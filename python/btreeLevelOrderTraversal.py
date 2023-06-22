# Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root: return []
        result, toAppend, currQueue, nextQueue = [], [], [root], []
        while len(currQueue):
            curr = currQueue.pop(0)
            toAppend.append(curr.val)
            if curr.left: nextQueue.append(curr.left)
            if curr.right: nextQueue.append(curr.right)
            if not len(currQueue):
                result.append(toAppend)
                toAppend = []
                currQueue = nextQueue
                nextQueue = []
        return result
