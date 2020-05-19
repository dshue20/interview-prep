# Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. 
# In other words, one of the first string's permutations is the substring of the second string.

# Example 1:

# Input: s1 = "ab" s2 = "eidbaooo"
# Output: True
# Explanation: s2 contains one permutation of s1 ("ba").
# Example 2:

# Input:s1= "ab" s2 = "eidboaoo"
# Output: False
 

# Note:

# The input strings only contain lower case letters.
# The length of both given strings is in range [1, 10,000].

def check_inclusion(s1, s2)
    return false if s1.length > s2.length
    arr1 = Array.new(26, 0)
    s1.each_char {|char| arr1[char.bytes[0] - 97] += 1}
    arr2 = Array.new(26, 0)
    start = 0
    idx = s1.length - 1
    str = s2[0..idx]
    str.each_char {|char| arr2[char.bytes[0] - 97] += 1}
    until idx == s2.length - 1 do
        return true if arr1 == arr2
        arr2[s2[start].bytes[0] - 97] -= 1
        idx += 1
        arr2[s2[idx].bytes[0] - 97] += 1
        start += 1
    end
    arr1 == arr2
end