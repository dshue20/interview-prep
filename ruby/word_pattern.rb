# Given a pattern and a string str, find if str follows the same pattern.

require 'Set'

# Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

# Example 1:

# Input: pattern = "abba", str = "dog cat cat dog"
# Output: true
# Example 2:

# Input:pattern = "abba", str = "dog cat cat fish"
# Output: false
# Example 3:

# Input: pattern = "aaaa", str = "dog cat cat dog"
# Output: false
# Example 4:

# Input: pattern = "abba", str = "dog dog dog dog"
# Output: false
# Notes:
# You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.

def partition_labels(str)
    arr = []
    until str.length == 0 do
        letter = str[0]
        idx = str.length - 1
        idx -= 1 until str[idx] == letter || idx == 0
        set = Set.new
        again = true
        while again do
            str[0..idx].each_char {|char| set.add(char)}
            right_idx = str.length - 1
            right_idx -= 1 until set.include?(str[right_idx]) || right_idx == idx
            again = false if right_idx == idx
            idx = right_idx
        end
        arr.push(right_idx + 1)
        str = str[(right_idx + 1)..-1]
    end
    arr
end

p word_pattern('abba', 'dog cat cat dog') # => true
p word_pattern('abba', 'dog cat cat fish') # => false
p word_pattern('aaaa', 'dog cat cat dog') # => false
p word_pattern('abba', 'dog dog dog dog') # => false