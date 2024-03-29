# You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

# Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

# Return intervals after the insertion.

 

# Example 1:

# Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
# Output: [[1,5],[6,9]]
# Example 2:

# Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
# Output: [[1,2],[3,10],[12,16]]
# Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 

# Constraints:

# 0 <= intervals.length <= 104
# intervals[i].length == 2
# 0 <= starti <= endi <= 105
# intervals is sorted by starti in ascending order.
# newInterval.length == 2
# 0 <= start <= end <= 105

class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        if not intervals: return [newInterval]
        left, right = 0, len(intervals) - 1
        leftInts, rightInts = [], []
        # get elements strictly to left of newInterval
        while intervals and intervals[0][1] < newInterval[0]:
            leftInts.append(intervals[0])
            del intervals[0]
        if not intervals: return leftInts + [newInterval]

        # get elements strictly to right of newInterval
        while intervals and intervals[-1][0] > newInterval[1]:
            rightInts.insert(0, intervals[-1])
            del intervals[-1]
        if not intervals: return leftInts + [newInterval] + rightInts

        middleInt = [min(intervals[0][0], newInterval[0]), max(intervals[-1][1], newInterval[1])]
        return leftInts + [middleInt] + rightInts
