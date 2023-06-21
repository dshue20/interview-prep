# Given a string s, find the length of the longest 
# substring
#  without repeating characters.

 

# Example 1:

# Input: s = "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.
# Example 2:

# Input: s = "bbbbb"
# Output: 1
# Explanation: The answer is "b", with the length of 1.
# Example 3:

# Input: s = "pwwkew"
# Output: 3
# Explanation: The answer is "wke", with the length of 3.
# Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

# Constraints:

# 0 <= s.length <= 5 * 104
# s consists of English letters, digits, symbols and spaces.

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        letters = set()
        maxLength = 0
        leftIdx, rightIdx = 0, 0
        while rightIdx < len(s):
            char = s[rightIdx]
            if char not in letters:
                letters.add(char)
                rightIdx += 1
            else: 
                letters.remove(s[leftIdx])
                leftIdx += 1
            currLength = rightIdx - leftIdx
            if currLength > maxLength: maxLength = currLength
        return maxLength
