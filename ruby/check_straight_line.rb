# You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents 
# the coordinate of a point. Check if these points make a straight line in the XY plane. 

# Example 1:



# Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
# Output: true
# Example 2:



# Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
# Output: false
 

# Constraints:

# 2 <= coordinates.length <= 1000
# coordinates[i].length == 2
# -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
# coordinates contains no duplicate point.

def check_straight_line(coordinates)
    slope = 'inf'
    slope = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0]) if coordinates[1][0] - coordinates[0][0] != 0
    (2...(coordinates.length)).each do |idx|
        prev = coordinates[idx-1]
        curr = coordinates[idx]
        if slope == 'inf'
            return false if curr[0] - prev[0] != 0
        else
            return false if curr[0] - prev[0] == 0 || (curr[1] - prev[1]) / (curr[0] - prev[0]) != slope
        end
    end
    true
end

p check_straight_line([[-3,-2],[-1,-2],[2,-2],[-2,-2],[0,-2]])