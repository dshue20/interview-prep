# Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated 
# according to the following rules:

# Each row must contain the digits 1-9 without repetition.
# Each column must contain the digits 1-9 without repetition.
# Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

# The Sudoku board could be partially filled, where empty cells are filled with the 
# character '.'.

require 'Set'

def check_row(row)
    set = Set.new
     row.each do |ele|
        return false if set.include?(ele) && ele != "."
         set.add(ele)
     end
     true
 end
 
 def is_valid_sudoku(board)
     # check rows
     result = true
     p 'start'
     board.each do |row|
        result = check_row(row)
        return false if !result
     end
     p 'row check done'
     # check columns
     board.transpose.each do |column|
        result = check_row(column)
         return false if !result
     end
     p 'column check done'
     # check squares
     i = 0
     j = 0
     # (0,0), (0,3), (0,6), (3,0), (3,3)...
     9.times do
         set = Set.new
         (i..(i+2)).each do |idx1|
            (j..(j+2)).each do |idx2|
                to_add = board[idx1][idx2]
                return false if set.include?(to_add) && to_add != "."
                set.add(to_add)
            end
         end
         if i < 6
            i += 3
         else
            j += 3
            i = 0
         end
     end
     true
 end

p is_valid_sudoku(
    [
        ["8","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ]
)