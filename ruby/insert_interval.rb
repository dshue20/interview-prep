# Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

# You may assume that the intervals were initially sorted according to their start times.

# Example 1:

# Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
# Output: [[1,5],[6,9]]
# Example 2:

# Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
# Output: [[1,2],[3,10],[12,16]]
# Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
# NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

def insert(intervals, new_interval)
    return [new_interval] if intervals.length == 0
    output = []
    left = []
    right = []
    
    intervals.each do |sub|
        if sub.last < new_interval.first
            left << sub
        elsif sub.first > new_interval.last
            right << sub
        end
    end
    
    (left + right).each{|sub| intervals.delete(sub)}
    left.each{|sub| output << sub}
    if intervals.length == 0
        output << new_interval
    else
        output << [[intervals.first.first, new_interval.first].min, [intervals.last.last, new_interval.last].max]
    end
    right.each{|sub| output << sub}
    
    output
end