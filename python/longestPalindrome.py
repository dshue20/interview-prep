# Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

# Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

# Example 1:

# Input: s = "abccccdd"
# Output: 7
# Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
# Example 2:

# Input: s = "a"
# Output: 1
# Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

# Constraints:

# 1 <= s.length <= 2000
# s consists of lowercase and/or uppercase English letters only.

class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: int
        """
        dict = {}
        for char in s:
            dict[char] = 1 if not char in dict else dict[char] + 1
        total = 0
        usedOdd = False
        for char in dict.keys():
            if dict[char] % 2 == 0:
                total += dict[char]
            elif not usedOdd:
                total += dict[char]
                usedOdd = True
            else:
                total += dict[char] - 1
        return total