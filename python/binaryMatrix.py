# Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

# The distance between two adjacent cells is 1.

class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        for i in range(len(mat)):
            for j in range(len(mat[0])):
                if mat[i][j] != 0: mat[i][j] = self.getVal1(i, j, mat)

        for i in reversed(range(len(mat))):
            for j in reversed(range(len(mat[0]))):
                if mat[i][j] != 0: mat[i][j] = min(mat[i][j], self.getVal2(i, j, mat))

        return mat

    def getVal1(self, i: int, j: int, mat: List[List[int]]) -> int:
        minVal = math.inf
        if i > 0: minVal = mat[i-1][j] + 1
        if j > 0: minVal = min(minVal, mat[i][j-1] + 1)
        return minVal

    def getVal2(self, i: int, j: int, mat: List[List[int]]) -> int:
        minVal = math.inf
        if i < len(mat) - 1: minVal = mat[i+1][j] + 1
        if j < len(mat[0]) - 1: minVal = min(minVal, mat[i][j+1] + 1)
        return minVal
