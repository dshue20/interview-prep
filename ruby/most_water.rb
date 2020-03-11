# Given n non-negative integers a1, a2, ..., an , where each represents a point at 
# coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is 
# at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such 
# that the container contains the most water.

def max_area(height)
    max_area = 0
    height.each_with_index do |start, idx1|
        height.each_with_index do |finish, idx2|
            if idx2 > idx1
                area = [start, finish].min * (idx2 - idx1) 
                max_area = area if area > max_area
            end
        end
    end
    max_area
end

# p max_area([1, 8, 6, 2, 5, 4, 8, 3, 7]);