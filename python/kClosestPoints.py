# Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

# The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

# You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

import math
import heapq
class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        heap = []
        for point in points:
            dist = self.getDistance(point)
            heapq.heappush(heap, (-dist, point))
            if len(heap) > k:
                heapq.heappop(heap)

        return [tuple[1] for tuple in heap]

    def getDistance(self, points: List[int]) -> float:
        return math.sqrt(points[0]**2 + points[1]**2)