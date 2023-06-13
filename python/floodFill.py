class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        if image[sr][sc] == color:
            return image
        else:
            oldColor = image[sr][sc]
            image[sr][sc] = color
            if sr > 0 and image[sr-1][sc] == oldColor: image = self.floodFill(image, sr-1, sc, color)
            if sr < len(image) - 1 and image[sr+1][sc] == oldColor: image = self.floodFill(image, sr+1, sc, color)
            if sc > 0 and image[sr][sc-1] == oldColor: image = self.floodFill(image, sr, sc-1, color)
            if sc < len(image[sr]) - 1 and image[sr][sc+1] == oldColor: image = self.floodFill(image, sr, sc+1, color)
        return image