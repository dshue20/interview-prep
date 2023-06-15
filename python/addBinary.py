# Given two binary strings a and b, return their sum as a binary string.

 

# Example 1:

# Input: a = "11", b = "1"
# Output: "100"
# Example 2:

# Input: a = "1010", b = "1011"
# Output: "10101"
 

# Constraints:

# 1 <= a.length, b.length <= 104
# a and b consist only of '0' or '1' characters.
# Each string does not contain leading zeros except for the zero itself.

import math
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        aIdx = len(a) - 1
        bIdx = len(b) - 1
        answer = ''
        carry = 0
        while aIdx >= 0 or bIdx >= 0 or carry == 1:
            aDigit = 0 if aIdx < 0 else int(a[aIdx])
            bDigit = 0 if bIdx < 0 else int(b[bIdx])
            [digit, carry] = self.addDigit(aDigit, bDigit, carry)
            answer = str(digit) + answer
            aIdx -= 1
            bIdx -= 1
        return answer
            
    def addDigit(self, num1: int, num2: int, carry: int) -> [int, int]:
        sum = num1 + num2 + carry
        # return [digit, carry]
        return [sum % 2, math.floor(sum / 2)]