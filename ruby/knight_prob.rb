# On an NxN chessboard, a knight starts at the r-th row and c-th column and attempts to make exactly K moves. 
# The rows and columns are 0 indexed, so the top-left square is (0, 0), and the bottom-right square is (N-1, N-1).

# A chess knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a 
# cardinal direction, then one square in an orthogonal direction. 

# Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the 
# piece would go off the chessboard) and moves there.

# The knight continues moving until it has made exactly K moves or has moved off the chessboard. Return the 
# probability that the knight remains on the board after it has stopped moving.

# Example:

# Input: 3, 2, 0, 0
# Output: 0.0625
# Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight on the board.
# From each of those positions, there are also two moves that will keep the knight on the board.
# The total probability the knight stays on the board is 0.0625.
 

# Note:

# N will be between 1 and 25.
# K will be between 0 and 100.
# The knight always initially starts on the board.

def knight_probability(size, moves, row, col)
    turns = [[1,2],[2,1],[-1,-2],[2,-1],[1,-2],[-1,2],[-2,1],[-2,-1]]
    num_times = 0
    stack = [[row, col]]
    until num_times == moves do
        stack.length.times do
            pos = stack.shift
            (0...8).each do |idx|
                new_row = pos[0] + turns[idx][0]
                new_col = pos[1] + turns[idx][1]
                if new_row.between?(0, size-1) && new_col.between?(0, size-1)
                    stack << [new_row, new_col]
                end
            end
        end
        num_times += 1
    end
    stack.length * 1.0 / (8 ** moves)
end

p knight_probability(3, 2, 0, 0)