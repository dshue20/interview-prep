# The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

# P   A   H   N
# A P L S I I G
# Y   I   R
# And then read line by line: "PAHNAPLSIIGYIR"

# Write the code that will take a string and make this conversion given a number of rows:

# string convert(string s, int numRows);
# Example 1:

# Input: s = "PAYPALISHIRING", numRows = 3
# Output: "PAHNAPLSIIGYIR"
# Example 2:

# Input: s = "PAYPALISHIRING", numRows = 4
# Output: "PINALSIGYAHRPI"
# Explanation:

# P     I    N
# A   L S  I G
# Y A   H R
# P     I

def convert(str, num_rows)
    arr = Array.new(num_rows){Array.new}
    row = 0
    direction = "positive"
    str.each_char do |char|
        arr[row] << char
        direction = "negative" if row == num_rows -1
        direction = "positive" if row == 0
        row = direction == "positive" ? row+1 : row-1
        row = 0 if num_rows == 1
    end
    arr.flatten.join("")
end

p convert("PAYPALISHIRING", 3)
p convert("ABC", 1)